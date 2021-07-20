import { Col, Container, Row } from "react-bootstrap";

export const ErrorPage = (props) => {
    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col xs="12" className="d-flex justify-content-center">
                    <i className="fas fa-exclamation-triangle fa-9x"
                    style={{color: "#e33939"}}>
                    </i>
                </Col>
                <Col xs="12" className="d-flex justify-content-center">
                    <h1>{props.errMess}</h1>
                </Col>
            </Row>
        </Container>
    );
}