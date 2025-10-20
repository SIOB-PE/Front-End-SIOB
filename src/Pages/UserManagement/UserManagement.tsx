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
import { useEffect, useState } from "react";



interface Usuario {
  id: string;
  matricula: string;
  nome: string;
  email: string;
  dataNascimento: string;
  senha?: string;
  tipoUsuario: string;
}

export function UserManagement() {
  const [searchNome, setSearchNome] = useState("");
  const [users, setUsers] = useState<Usuario[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/usuario");

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/usuario?nome=${searchNome}`
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Erro ao pesquisar usuários:", error);
    }
  };

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
                      <Button
                        href="/RegisterUser"
                        className="user-management-new-user-button-style"
                      >
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
                        value={searchNome}
                        onChange={(e) => setSearchNome(e.target.value)}
                      />
                      <Button
                        onClick={handleSearch}
                        className="list-occurrence-button-style"
                      >
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
                {users.length > 0 ? (
                  users.map((user) => (
                    <div key={user.id}>
                      <Row className="d-flex align-items-center justify-content-between my-4">
                        <Col>
                          <p>{user.nome}</p>
                        </Col>
                        <Col>
                          <p>{user.email}</p>
                        </Col>
                        <Col>
                          <p>{user.tipoUsuario}</p>
                        </Col>
                        <Col>
                          <p>Ultimo acesso</p>
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
                    </div>
                  ))
                ) : (
                  <Row className="text-center my-4">
                    <p>Nenhum usuário encontrado.</p>
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
