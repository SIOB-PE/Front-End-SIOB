import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { CustomNavBar } from "../../Components/CustomNavBar/CustomNavbar";
import "./Home.css";
import { FunnelIcon, MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react";

export function Home() {
  return (
    <>
      <CustomNavBar nameMilitary="Major Silva" />

      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <Card className="card-style">
              <Card.Body className="d-flex align-items-center justify-content-between w-100">
                <Button className="ms-3 home-button-style">
                  <PlusIcon size={25} weight="bold" className="me-2" />
                  Nova ocorrência
                </Button>

                <div className="home-header-content">
                  <h4>Ocorências ativas</h4>
                  <h2>21</h2>
                </div>
                <div className="home-header-content">
                  <h4>Finalizadas hoje</h4>
                  <h2>12</h2>
                </div>
                <div className="home-header-content">
                  <h4>Aguardando</h4>
                  <h2>8</h2>
                </div>
                <div className="home-header-content">
                  <h4>Equipes ativas</h4>
                  <h2>20</h2>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={7}>
            <Card>
              <Card.Body className="d-flex align-items-center justify-conten-center flex-column w-100">
                <Row className="w-100">
                  <Col md={6}>
                    <InputGroup>
                      <InputGroup.Text>
                        <MagnifyingGlassIcon size={24}/>
                      </InputGroup.Text>
                      <FormControl />
                      <InputGroup.Text>
                        <FunnelIcon size={24}/>
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                  <Col md={6} className="d-flex align-items-center justify-content-center">
                    <h3>Lista de ocorrencias</h3>
                  </Col>
                </Row>
                <hr className="w-100" />
                <Row>
                  <Col md={12}>
                    
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
