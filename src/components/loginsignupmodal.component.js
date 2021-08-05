import React, { useState } from 'react';
import { Col, Container, Form, Modal, Row, Tab, Tabs } from 'react-bootstrap';

function LoginSignup({show, toggleModal}) {

    const [loginTab, setLoginTab] = useState(true); 
    const openLoginTab = () => { setLoginTab(true); }
    const openSignupTab = () => { setLoginTab (false); }
    return (
        <Modal show={show} onHide={() => {toggleModal()}}
        centered>
            <Modal.Header>
                <Container>
                    <Row>
                        <Col xs={{span: 1, offset: 10}}>
                            <div className="align-self-end">
                                <button type="button" className="close" onClick={() => {toggleModal()}}>
                                    &times;
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Tabs defaultActiveKey="login" activeKey={loginTab ? "login" : "signup" }
                            onSelect={(k) => (k === "login") ? openLoginTab() : openSignupTab()}>
                                    <Tab eventKey="login" title="Login" />
                                    <Tab eventKey="signup" title="Signup" />
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    { loginTab ? <LoginForm /> : <SignupForm /> }
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <div className="d-flex justify-content-center">
                        {loginTab ? <LoginFormFooterMessage openSignupTab={openSignupTab} />
                            : <SignupFormFooterMessage openLoginTab={openLoginTab} /> }
                    </div>
                </Container>
            </Modal.Footer>
        </Modal>
    );
}

const LoginForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formUserName">
                <Row>
                    <Col xs={{span: 12}} sm={{span: 2}}>
                        <Form.Label className="mt-1">
                            Username
                        </Form.Label>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 10}}>
                        <Form.Control type="text" 
                        placeholder="Enter your Username"
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassWord">
                <Row>
                    <Col xs={{span: 12}} sm={{span: 2}}>
                        <Form.Label className="mt-1">
                            Password
                        </Form.Label>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 10}}>
                        <Form.Control type="password" 
                        placeholder="Enter your password"
                        />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );
}

const SignupForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formUserName">
                <Row>
                    <Col xs={{span: 12}} sm={{span: 2}}>
                        <Form.Label className="mt-1">
                            Username
                        </Form.Label>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 10}}>
                        <Form.Control type="text" 
                        placeholder="Enter your Username"
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassWord">
                <Row>
                    <Col xs={{span: 12}} sm={{span: 2}}>
                        <Form.Label className="mt-1">
                            Password
                        </Form.Label>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 10}}>
                        <Form.Control type="password" 
                        placeholder="Enter your password"
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassWord">
                <Row>
                    <Col xs={{span: 12}} sm={{span: 2}}>
                        <Form.Label>
                            Confirm Password
                        </Form.Label>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 10}}>
                        <Form.Control type="password" 
                        placeholder="Confirm password"
                        />
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );
}

const LoginFormFooterMessage = ({openSignupTab}) => {
    return (
        <div>
            Don't Have an Account?<button className="btn btn-link" onClick={openSignupTab}>Sign Up</button>
        </div>
    );
}

const SignupFormFooterMessage = ({openLoginTab}) => {
    return (
        <div>
            Already have an Account?<button className="btn btn-link" onClick={openLoginTab}>Log In</button>
        </div>
    );
}

export default LoginSignup;
