import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import './Register.css';
import logo from '../../assets/logo.svg';
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useForm, type SubmitHandler } from "react-hook-form";


type Inputs = {
	cpf: string
	email: string
	dataNascimento: string;
}

export function Register() {

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors}
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	console.log(watch("cpf"))

	return (
		<Container className="vh-100 d-flex justify-content-center align-items-center">
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
							<Form onSubmit={handleSubmit(onSubmit)}>
								<Form.Group className="form-group-style" controlId="formBasicCPF">
									<div className="w-100">
										<div className="d-flex align-items-start ms-1 mt-5">
											<Form.Label className="form-label-style">
												Digite aqui seu CPF
											</Form.Label>
										</div>
										<Form.Control {...register("cpf", {required:true})} className="form-control-style" placeholder="CPF" />
										{errors.cpf && <p className="m-0 text-danger">Esse campo precisa ser preenchido</p>}
									</div>
								</Form.Group>
								
								<Form.Group className="form-group-style">

									<div className="w-100 mt-5">
										<div className="d-flex align-items-start ms-1">
											<Form.Label className="form-label-style">
												Digite seu e-mail
											</Form.Label>
										</div>
										<Form.Control {...register("email", {required:true})} className="form-control-style" placeholder="Email" />
										{errors.email && <p className="m-0 text-danger">Esse campo precisa ser preenchido</p>}
									</div>
								</Form.Group>
								<Form.Group className="form-group-style">
									<div className="w-100 mt-5">
										<div className="d-flex align-items-start ms-1">
											<Form.Label className="form-label-style">
												Digite aqui sua data de nascimento
											</Form.Label>
										</div>
										<Form.Control {...register("dataNascimento", {required:true})} type="date" className="form-control-style" placeholder="DD/MM/AAAA" />
										{errors.dataNascimento && <p className="m-0 text-danger">Esse campo precisa ser preenchido</p>}
									</div>
								</Form.Group>
								<Button as="input" type="submit" className="button-style" value={"Próximo passo"}/>
							</Form>			
							
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}