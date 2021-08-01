import React from 'react';
import { Modal, Row, Tab, Tabs } from 'react-bootstrap';

function LoginSignup({show, toggleModal}) {
    return (
        <Modal show={show} onHide={() => {toggleModal()}}
        centered>
            <Modal.Header className="mb-0 d-flex justify-content-center">
                <Tabs defaultActiveKey="login">
                        <Tab eventKey="login" title="Login"></Tab>
                        <Tab eventKey="signup" title="Signup"></Tab>
                </Tabs>
                <div className="align-self-right">
                    <button type="button" className="close" onClick={() => {toggleModal()}}>
                        &times;
                    </button>
                </div>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

export default LoginSignup;
