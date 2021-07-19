import { Col, Container, Row } from "react-bootstrap"

export const Loading = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col xs="12" className="d-flex justify-content-center">
                    <i className="fas fa-spinner fa-spin fa-9x"
                    style={{color: "#03a1fc"}}></i>
                </Col>
                <Col xs="12" className="d-flex justify-content-center">
                    <h1>Loading content...</h1>
                </Col>
            </Row>
        </Container>
    );
}