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
import "./UserManagement.css";
import {
  MagnifyingGlassIcon,
  PencilSimpleIcon,
  PlusIcon,
  UserCircleMinusIcon,
} from "@phosphor-icons/react";

export function UserManagement() {
  return (
    <>
      <CustomNavBar nameMilitary="Major Silva" />

      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={8}>
            <Card className="mt-5">
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Row className="w-100">
                  <Col md={5}>
                    <div className="w-100 h-100 d-flex align-items-center justify-content-start">
                      <Button href="/RegisterUser" className="user-management-new-user-button-style">
                        <PlusIcon className="me-2" size={30} />
                        Novo usuário
                      </Button>
                    </div>
                  </Col>

                  <Col md={7}>
                    <InputGroup>
                      <FormControl
                        placeholder="Buscar usuários"
                        className="list-occurrence-form-control-style"
                      />
                      <Button className="list-occurrence-button-style">
                        <MagnifyingGlassIcon size={24} />
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center mt-5">
          <Col md={11}>
            <Card>
              <Card.Body className="flex-column">
                <Row className="d-flex align-items-center justify-content-center mb-4">
                  <Col>
                    <h5>Nome</h5>
                  </Col>
                  <Col>
                    <h5>Email</h5>
                  </Col>
                  <Col>
                    <h5>Perfil</h5>
                  </Col>
                  <Col>
                    <h5>Ultimo acesso</h5>
                  </Col>
                  <Col>
                    <h5>Ações</h5>
                  </Col>
                </Row>
                <hr />
                <Row className="d-flex align-items-center justify-content-between my-4">
                  <Col>
                    <p>Joao Silva</p>
                  </Col>
                  <Col>
                    <p>jsilva@cbmpe.gov.br</p>
                  </Col>
                  <Col>
                    <p>Administrador</p>
                  </Col>
                  <Col>
                    <p>2024-01-15 14:30</p>
                  </Col>
                  <Col>
				    <Button className="user-management-edit-button-style me-4">
                      <PencilSimpleIcon size={30} />
                    </Button>
                    <Button className="user-management-delete-button-style">
                      <UserCircleMinusIcon size={30} />
                    </Button>
                  </Col>
                </Row>

                <hr />
                <Row className="d-flex align-items-center justify-content-between my-4">
                  <Col>
                    <p>Pedro</p>
                  </Col>
                  <Col>
                    <p>psilva@cbmpe.gov.br</p>
                  </Col>
                  <Col>
                    <p>Bombeiro</p>
                  </Col>
                  <Col>
                    <p>2024-01-15 14:30</p>
                  </Col>
                  <Col>
				    <Button className="user-management-edit-button-style me-4">
                      <PencilSimpleIcon size={30} />
                    </Button>
                    <Button className="user-management-delete-button-style">
                      <UserCircleMinusIcon size={30} />
                    </Button>
                  </Col>
                </Row>

                <hr />
                <Row className="d-flex align-items-center justify-content-between my-4">
                  <Col>
                    <p>Julia</p>
                  </Col>
                  <Col>
                    <p>jsilva@cbmpe.gov.br</p>
                  </Col>
                  <Col>
                    <p>Analista</p>
                  </Col>
                  <Col>
                    <p>2024-01-15 14:30</p>
                  </Col>
                  <Col>
				    <Button className="user-management-edit-button-style me-4">
                      <PencilSimpleIcon size={30} />
                    </Button>
                    <Button className="user-management-delete-button-style">
                      <UserCircleMinusIcon size={30} />
                    </Button>
                  </Col>
                </Row>
                <hr />
                <Row className="d-flex align-items-center justify-content-between my-4">
                  <Col>
                    <p>Maria </p>
                  </Col>
                  <Col>
                    <p>msilva@cbmpe.gov.br</p>
                  </Col>
                  <Col>
                    <p>Administrador</p>
                  </Col>
                  <Col>
                    <p>2024-01-15 14:30</p>
                  </Col>
                  <Col>
				    <Button className="user-management-edit-button-style me-4">
                      <PencilSimpleIcon size={30} />
                    </Button>
                    <Button className="user-management-delete-button-style">
                      <UserCircleMinusIcon size={30} />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
