import { Button, Form } from "react-bootstrap";
import "./Register.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AuthCardLayout } from "../../Components/AuthCardLayout/AuthCardLayout";

type Inputs = {
  cpf: string;
  email: string;
  dataNascimento: string;
};

export function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("cpf"));

  return (
    <AuthCardLayout title="Primeiro acesso SIOB-PE">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="form-group-style" controlId="formBasicCPF">
          <div className="w-100">
            <div className="d-flex align-items-start ms-1 mt-5">
              <Form.Label className="form-label-style">
                Digite aqui seu CPF
              </Form.Label>
            </div>
            <Form.Control
              {...register("cpf", { required: true })}
              className="form-control-style"
              placeholder="CPF"
            />
            {errors.cpf && (
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
                Digite seu e-mail
              </Form.Label>
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
              <Form.Label className="form-label-style">
                Digite aqui sua data de nascimento
              </Form.Label>
            </div>
            <Form.Control
              {...register("dataNascimento", { required: true })}
              type="date"
              className="form-control-style"
            />
            {errors.dataNascimento && (
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
