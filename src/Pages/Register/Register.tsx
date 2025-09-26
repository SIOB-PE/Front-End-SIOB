import { Card, Col, Container, Row } from "react-bootstrap";
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

					</Card>
				</Col>
			</Row>
		</Container>
	);
}