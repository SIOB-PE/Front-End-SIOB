import { Button, Form, InputGroup } from "react-bootstrap";
import "./Register.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AuthCardLayout } from "../../Components/AuthCardLayout/AuthCardLayout";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type Inputs = {
  matricula: string;
  senha: string;
  confirmarSenha: string;
};

export function Register02() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const senha = watch("senha");

  return (
    <AuthCardLayout title="Primeiro acesso SIOB-PE">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Matrícula */}
        <Form.Group className="form-group-style" controlId="formBasicMatricula">
          <Form.Label className="form-label-style">Digite aqui a sua matrícula</Form.Label>
          <Form.Control
            {...register("matricula", { required: "A matrícula é obrigatória" })}
            className="form-control-style"
            placeholder="Matrícula"
          />
          {errors.matricula && <p className="m-2 text-danger">{errors.matricula.message}</p>}
        </Form.Group>

        {/* Senha */}
        <Form.Group className="form-group-style mt-3" controlId="formBasicSenha">
          <Form.Label className="form-label-style">Digite sua senha</Form.Label>
          <InputGroup>
            <Form.Control
              type={showSenha ? "text" : "password"}
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" },
              })}
              className="form-control-style"
              placeholder="Senha"
            />
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => setShowSenha(!showSenha)}
            >
              {showSenha ? <BsEyeSlash /> : <BsEye />}
            </Button>
          </InputGroup>
          {errors.senha && <p className="m-2 text-danger">{errors.senha.message}</p>}
        </Form.Group>

        {/* Confirmar Senha */}
        <Form.Group className="form-group-style mt-3" controlId="formConfirmarSenha">
          <Form.Label className="form-label-style">Confirme sua senha</Form.Label>
          <InputGroup>
            <Form.Control
              type={showConfirmarSenha ? "text" : "password"}
              {...register("confirmarSenha", {
                required: "Confirme sua senha",
                validate: (value) => value === senha || "As senhas não coincidem",
              })}
              className="form-control-style"
              placeholder="Confirmar senha"
            />
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
            >
              {showConfirmarSenha ? <BsEyeSlash /> : <BsEye />}
            </Button>
          </InputGroup>
          {errors.confirmarSenha && (
            <p className="m-2 text-danger">{errors.confirmarSenha.message}</p>
          )}
        </Form.Group>

        {/* Botão de submit */}
        <Button as="input" type="submit" className="button-style mt-4" value="Cadastrar" />
      </Form>
    </AuthCardLayout>
  );
}
