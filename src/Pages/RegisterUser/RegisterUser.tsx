import "./RegisterUser.css";
import { Button, Form } from "react-bootstrap";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AuthCardLayout } from "../../Components/AuthCardLayout/AuthCardLayout";
import { useNavigate } from "react-router-dom";

type Inputs = {
  nome: string;
  email: string;
  matricula: string;
};

export function RegisterUser() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate("02", {state: data});
  };

  watch();
  return (
    <AuthCardLayout title="Cadastro de usuário">
      <Form
        className="d-flex align-itens-center justify-content-center flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group className="form-group-style" controlId="formBasicCPF">
          <div className="w-100">
            <div className="d-flex align-items-start ms-1 mt-5">
              <Form.Label className="form-label-style">Digite o nome do militar</Form.Label>
            </div>
            <Form.Control
              {...register("nome", { required: true })}
              className="form-control-style"
              placeholder="Nome"
            />
            {errors.nome && (
              <p className="m-0 text-danger">
                Esse campo precisa ser preenchido
              </p>
            )}
          </div>
        </Form.Group>

        <Form.Group className="form-group-style">
          <div className="w-100 mt-5">
            <div className="d-flex align-items-start ms-1">
              <Form.Label className="form-label-style">Email</Form.Label>
            </div>
            <Form.Control
              {...register("email", { required: true })}
              className="form-control-style"
              placeholder="Email"
            />
            {errors.email && (
              <p className="m-0 text-danger">
                Esse campo precisa ser preenchido
              </p>
            )}
          </div>

        </Form.Group>
		        <Form.Group className="form-group-style">
          <div className="w-100 mt-5">
            <div className="d-flex align-items-start ms-1">
              <Form.Label className="form-label-style">Matrícula</Form.Label>
            </div>
            <Form.Control
              {...register("matricula", { required: true })}
              className="form-control-style"
              placeholder="Matrícula"
            />
            {errors.matricula && (
              <p className="m-0 text-danger">
                Esse campo precisa ser preenchido
              </p>
            )}
          </div>
        </Form.Group>

        <div className="d-flex align-items-center justify-content-center flex-column">
          <Button
            as="input"
            type="submit"
            className="register-user-next-style mt-5"
            value={"Próximo passo"}
          />
        </div>
      </Form>
    </AuthCardLayout>
  );
}
