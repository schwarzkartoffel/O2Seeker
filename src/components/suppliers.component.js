import React from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

export default class Suppliers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            suppliers: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/suppliers/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        suppliers: res.data
                    });
                }
            })
            .catch(err => console.log(err));
    }

    render() {
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.suppliers.map((supplier, index) =>
                            <tr key={supplier._id}>
                                <td>{index}</td>
                                <td>{supplier.supplierName}</td>
                                <td>{supplier.phoneNumber}</td>
                                <td>{supplier.pinCode}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        );
    }
}