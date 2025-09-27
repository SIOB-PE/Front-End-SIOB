import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import './Register.css';
import logo from '../../assets/logo.svg';
import { ArrowLeftIcon } from "@phosphor-icons/react";
export function Register() {

	return (
		<Container className="container-style">
			<Row>
				<Col className="d-flex align-items-center p-0 " xs={6}>
					<Card className="card-img-style">
						<a className="return-style" href="/FirstAccess">
							<ArrowLeftIcon color="white" size={32} />
						</a>
						<Card.Img src={logo} className="img-style" />
					</Card>
				</Col>
				<Col className="d-flex align-items-center p-0" xs={6}>
					<Card className="card-form-style">
						<Card.Body className="">
							<Card.Title className="card-title-style">
								Primeiro acesso SIOB-PE
							</Card.Title>
							<Form>
								<Form.Group className="form-group-style" controlId="formBasicCPF">
									<div className="w-100">
										<div className="d-flex align-items-start ms-1 mt-5">
											<Form.Label className="form-label-style">
												Digite aqui seu CPF
											</Form.Label>
										</div>
										<Form.Control className="form-control-style" placeholder="CPF" />
									</div>
									<div className="w-100 mt-5">
										<div className="d-flex align-items-start ms-1">
											<Form.Label className="form-label-style">
												Digite seu e-mail
											</Form.Label>
										</div>
										<Form.Control className="form-control-style" placeholder="Email" />
									</div>
									<div className="w-100 mt-5">
										<div className="d-flex align-items-start ms-1">
											<Form.Label className="form-label-style">
												Digite aqui sua data de nascimento
											</Form.Label>
										</div>
										<Form.Control className="form-control-style" placeholder="DD/MM/AAAA" />
									</div>
								</Form.Group>
							</Form>			
							<Button className="button-style">
								Próximo passo
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}