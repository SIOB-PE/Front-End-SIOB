import { Card, Col, Container, Row } from "react-bootstrap";
import "./Occurrence.css";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export function Occurrence() {


  const handleCardClick = () => {
    alert("Você clicou no card!");
  };
  
  return (
    <Container fluid className="mb-3">
      <Row>
        <Col>
          <Card onClick={handleCardClick} className="card-occurrence w-100">
            <Card.Body className="card-body-occurrence">
              <div className="div-card-body-occurrence">
                <h4>Incendio Residencia</h4>
                <div className="d-flex align-items-center justify-content-start">
                  <p>Local:</p>
                  <p>Rua das flores, 123 - Boa viagem |</p>
                  <p>Hora:</p>
                  <p>14:34</p>
                </div>
              </div>

              <ArrowUpRightIcon size={37} weight="bold" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
