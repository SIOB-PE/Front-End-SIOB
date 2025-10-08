import { Button, Form } from "react-bootstrap";
import "./Register.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AuthCardLayout } from "../../Components/AuthCardLayout/AuthCardLayout";

type Inputs = {
  matricula: string;
  senha: string;
};

export function Register() {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(watch("matricula"));

  return (
    <AuthCardLayout hrefReturn="/FirstAccess" title="Bem-vindo ao SIOB-PE">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="form-group-style" controlId="formBasicCPF">
          <div className="w-100">
            <div className="d-flex align-items-start ms-1 mt-5">
              <Form.Label className="form-label-style">
                Matrícula
              </Form.Label>
            </div>
            <Form.Control
              {...register("matricula", { required: true })}
              className="form-control-style"
              placeholder="matrícula"
            />
            {errors.matricula && (
              <p className="m-0 text-danger">
                Esse campo precisa ser preenchido
              </p>
            )}
          </div>
        </Form.Group>

        <Form.Group className="form-group-style">
          <div className="w-100 mt-5">
            <div className="d-flex align-items-start ms-1">
              <Form.Label className="form-label-style">
                Senha
              </Form.Label>
            </div>
            <Form.Control
              {...register("senha", { required: true })}
              className="form-control-style"
              placeholder="senha"
            />
            {errors.senha && (
              <p className="m-0 text-danger">
                Esse campo precisa ser preenchido
              </p>
            )}
          </div>
        </Form.Group>
        <Button
          as="input"
          type="submit"
          className="button-style"
          value={"Próximo passo"}
        />
      </Form>
    </AuthCardLayout>
  );
}
