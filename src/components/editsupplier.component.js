import axios from "axios";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { ErrorPage } from "./errorpage.component";
import { Loading } from "./loading.component";

export default class EditSupplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierName: '',
            phoneNumber: 0,
            pinCode: 0,
            isLoading: true,
            errMess: ''
        };
        this.onChangeSupplierName = this.onChangeSupplierName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangePinCode = this.onChangePinCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/suppliers/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    supplierName: res.data.supplierName,
                    phoneNumber: res.data.phoneNumber,
                    pinCode: res.data.pinCode,
                    isLoading: false
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

    onChangeSupplierName(e) {
        this.setState({
            supplierName: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    }

    onChangePinCode(e) {
        this.setState({
            pinCode: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newSupplier = {
            supplierName: this.state.supplierName,
            phoneNumber: this.state.phoneNumber,
            pinCode: this.state.pinCode
        };
        const id = this.props.match.params.id;
        axios.post('http://localhost:5000/suppliers/update/' + id, newSupplier)
            .then(res => {
                console.log(res.data);
                window.location = '/suppliers';
            })
            .catch(error => {
                console.log("Inside handleSubmit of editsupplier");
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    this.setState({
                        errMess: "Error " + error.response.status + ": " + error.response.statusText
                    });
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    this.setState({
                        errMess: "Oops. The server is not responding."
                    });
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    this.setState({
                        errMess: "Oops. There was a problem setting up the request"
                    });
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
                    <h3>Edit supplier Info</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="supplierName">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control required 
                                type="text"
                                value={this.state.supplierName}
                                onChange={this.onChangeSupplierName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control required 
                                type="number"
                                value={this.state.phoneNumber || ""}
                                onChange={this.onChangePhoneNumber} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pinCode">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control required 
                                type="number"
                                value={this.state.pinCode || ""}
                                onChange={this.onChangePinCode} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Edit Supplier
                        </Button>
                    </Form>
                </Container>
            );
        }
    }
}