import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import logo from '../../assets/logo.svg';

type Title= {
	title: string;
  hrefReturn: string;
  children?: React.ReactNode;
}


export function AuthCardLayout({title, hrefReturn, children}: Title) {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col className="d-flex align-items-center p-0 " xs={6}>
          <Card className="card-img-style">
            <a className="return-style" href={hrefReturn}>
              <ArrowLeftIcon color="white" size={32} />
            </a>
            <Card.Img src={logo} className="img-style" />
          </Card>
        </Col>
        <Col className="d-flex align-items-center p-0" xs={6}>
          <Card className="card-form-style">
            <Card.Body className="">
              <Card.Title className="card-title-style">
                {title}
              </Card.Title>
              {children}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
