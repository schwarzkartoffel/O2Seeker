import React from "react";
import { Button, ButtonGroup, Container, Table } from "react-bootstrap";
import { Loading } from "./loading.component";
import { ErrorPage } from "./errorpage.component";
import axios from "axios";
import { backendUrl } from "../../shared/baseUrl";

export default class Suppliers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suppliers: [],
            isLoading: true,
            errMess: ""
        };
        this.onDeleteSupplier = this.onDeleteSupplier.bind(this);
    }

    componentDidMount() {
        axios.get(backendUrl + '/suppliers/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        suppliers: res.data,
                    });
                }
                this.setState({
                    isLoading: false,
                });
            })
            .catch(error => {
                console.log("Inside catch block of componentDidMount");
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    this.setState({
                        isLoading: false,
                        errMess: "Error " + error.response.status + ": " + error.response.statusText
                    });
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    this.setState({
                        isLoading: false,
                        errMess: "Oops. The server is not responding."
                    });
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    this.setState({
                        isLoading: false,
                        errMess: "Oops. There was a problem setting up the request"
                    });
                  }
                  console.log(error.config);
            });
    }

    onDeleteSupplier(id) {
        axios.delete(backendUrl + '/suppliers/' + id)
            .then(res => {
                this.setState({
                    suppliers: this.state.suppliers.filter(sup => sup._id !== id)
                });
            })
            .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                  alert("Error " + error.response.status + ": " + error.response.statusText);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  alert("The server is not responding");
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                  alert("Oops. There was a problem setting up the request");
                }
                console.log(error.config);
              });
        
    }

    render() {
        if (this.state.isLoading) {
            return <Loading />
        }
        else if (this.state.errMess) {
            return <ErrorPage errMess={this.state.errMess} />
        }
        else {
            return (
                <Container className="mt-3">
                    <h3>All suppliers</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Supplier Name</th>
                                <th>Phone Number</th>
                                <th>Pin Code</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.suppliers.map((supplier, index) =>
                                <tr key={supplier._id}>
                                    <td>{index + 1}</td>
                                    <td>{supplier.supplierName}</td>
                                    <td>{supplier.phoneNumber}</td>
                                    <td>{supplier.pinCode}</td>
                                    <td>
                                        <ButtonGroup aria-label="EditDelete">
                                            <Button variant="warning"
                                            href={"suppliers/edit/" + supplier._id}>
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                            <Button variant="danger">
                                                <i className="fas fa-trash"
                                                onClick={() => {this.onDeleteSupplier(supplier._id)}}></i>
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            );
        }
    }
}