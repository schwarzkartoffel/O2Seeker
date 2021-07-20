import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pinCode: 0,
            suppliers: []
        }
        this.onChangePinCode = this.onChangePinCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangePinCode(e) {
        this.setState({
            pinCode: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.get("http://localhost:5000/suppliers/byPinCode/" + this.state.pinCode)
            .then(res => {
                this.setState({
                    suppliers: res.data
                });
            })
            .catch(err => console.log(err));
    }


    render() {
        const SupplierTable = () => {
            return (
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
                                <td>{index + 1}</td>
                                <td>{supplier.supplierName}</td>
                                <td>{supplier.phoneNumber}</td>
                                <td>{supplier.pinCode}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            );
        }

        return (
            <Container className="mt-3">
                <Row>
                    <Col xs="12">
                        <h3>Search for a Supplier</h3>
                    </Col>
                </Row>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3 mt-3" controlId="pinCode">
                        <Row>
                            <Col xs="12" md="1">
                                <Form.Label>Pin Code</Form.Label>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Control required
                                    type="number"
                                    value={this.state.pinCode || ""}
                                    placeholder="Enter your Pin Code"
                                    onChange={this.onChangePinCode}
                                >
                                </Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Row>
                        <Col xs={{span: "auto"}} md={{span: "auto", offset: 1}}>
                            <Button variant="primary" type="submit">
                                Find Supplier
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Row className="mt-3 mb-3">
                    {this.state.suppliers.length > 0 ? <SupplierTable />
                    : ''}
                </Row>
            </Container>
        );
    }
}