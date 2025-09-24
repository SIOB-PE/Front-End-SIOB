import { Button, Card, Container } from "react-bootstrap";
import './FirstAccess.css';

export function FirstAccess() {
	return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            <Card className="card p-4 d-flex align-items-center">

                <h1 className="title-style">Acesso do Bombeiro</h1>
				<p className="text-body">
					Não acessou nenhuma vez o <b>SIOB-PE</b>? <br />
					Faça seu <b>cadastro</b> clicando <br />
					em <b>primeiro acesso.</b>
				</p>

				<Button className="button-first-access">
					Primeiro Acesso
				</Button>

				<p className="text-body mt-4">
					Já fez o seu primeiro acesso?<br />
					Clique em entrar.
				</p>

				<Button className="button-enter">
					Entrar
				</Button>
            </Card>
        </Container>
	);
}