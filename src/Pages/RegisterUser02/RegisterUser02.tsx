import './RegisterUser02.css';
import { Button, Form } from "react-bootstrap";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AuthCardLayout } from "../../Components/AuthCardLayout/AuthCardLayout";
import { useNavigate } from "react-router-dom";

type Inputs = {
  senha1: string;
  senha2: string;
};

export function RegisterUser02() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    navigate("/Home");
  };

  watch("senha1");
  return (
    <AuthCardLayout title="Cadastro de usuário">
      <Form
        className="d-flex align-itens-center justify-content-center flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group className="form-group-style" controlId="formBasicCPF">
          <div className="w-100">
            <div className="d-flex align-items-start ms-1 mt-5">
              <Form.Label className="form-label-style">Digite a senha</Form.Label>
            </div>
            <Form.Control
              {...register("senha1", { required: true })}
              className="form-control-style"
              placeholder="Senha"
            />
            {errors.senha1 && (
              <p className="m-0 text-danger">
                Esse campo precisa ser preenchido
              </p>
            )}
          </div>
        </Form.Group>

        <Form.Group className="form-group-style">
          <div className="w-100 mt-5">
            <div className="d-flex align-items-start ms-1">
              <Form.Label className="form-label-style">Confirme a senha</Form.Label>
            </div>
            <Form.Control
              {...register("senha2", { required: true })}
              className="form-control-style"
              placeholder="Confirme a senha"
            />
            {errors.senha2 && (
              <p className="m-0 text-danger">
                Esse campo precisa ser preenchido
              </p>
            )}
          </div>

        </Form.Group>


        <div className="d-flex align-items-center justify-content-center flex-column mt-5">
          <Button
            as="input"
            type="submit"
            className="register-user-register-new-user-style mt-5"
            value={"Cadastrar usuário"}
          />
        </div>
      </Form>
    </AuthCardLayout>
  );
}
