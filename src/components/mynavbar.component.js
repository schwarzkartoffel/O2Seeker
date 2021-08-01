import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

export default class Mynavbar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">O2Seeker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/suppliers">All Suppliers</Nav.Link>
                            <Nav.Link href="/suppliers/add">Add Supplier</Nav.Link>
                        </Nav>
                        <Button variant="outline-light" className="align-self-end"
                        onClick={() => {this.props.toggleLoginModal()}}>
                            Login
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
};