import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class AddSupplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierName: '',
            phoneNumber: 0,
            pinCode: 0
        };
        this.onChangeSupplierName = this.onChangeSupplierName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangePinCode = this.onChangePinCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log('Added new supplier!');
        console.log(newSupplier);
        window.location = '/suppliers';
    }

    render() {
        return (
            <Container className="mt-3">
                <h3>Add a new supplier</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="supplierName">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control required 
                            type="text"
                            placeholder="Enter Supplier Name"
                            value={this.state.supplierName}
                            onChange={this.onChangeSupplierName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control required 
                            type="number"
                            placeholder="Enter Phone Number"
                            value={this.state.phoneNumber || ""}
                            onChange={this.onChangePhoneNumber} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pinCode">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control required 
                            type="number"
                            placeholder="Enter Pin Code"
                            value={this.state.pinCode || ""}
                            onChange={this.onChangePinCode} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Supplier
                    </Button>
                </Form>
            </Container>
        );
    }
}