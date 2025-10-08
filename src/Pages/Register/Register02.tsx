import { Button, Form, InputGroup } from "react-bootstrap";
import "./Register02.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AuthCardLayout } from "../../Components/AuthCardLayout/AuthCardLayout";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

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
    <AuthCardLayout hrefReturn="/Register" title="Primeiro acesso SIOB-PE">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Matrícula */}
        <Form.Group className="form-group-style" controlId="formBasicMatricula">
          <div className="w-100">
            <div className="d-flex align-items-start ms-1 mt-5">
              <Form.Label className="form-label-style">
                Digite aqui a sua matrícula
              </Form.Label>
            </div>
          </div>
          <Form.Control
            {...register("matricula", {
              required: "A matrícula é obrigatória",
            })}
            className="form-control-style"
            placeholder="Matrícula"
          />
          {errors.matricula && (
            <p className="m-0 text-danger">{errors.matricula.message}</p>
          )}
        </Form.Group>

        {/* Senha */}
        <Form.Group
          className="form-group-style mt-5"
          controlId="formBasicSenha"
        >
          <div className="w-100">
            <div className="d-flex align-items-start ms-1">
              <Form.Label className="form-label-style">
                Digite sua senha
              </Form.Label>
            </div>
          </div>
          <InputGroup>
            <Form.Control
              type={showSenha ? "text" : "password"}
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter no mínimo 6 caracteres",
                },
              })}
              className="form-control-style"
              placeholder="Senha"
            />
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => setShowSenha(!showSenha)}
            >
              {showSenha ? <EyeSlashIcon /> : <EyeIcon />}
            </Button>
          </InputGroup>
          {errors.senha && (
            <p className="m-0 text-danger">{errors.senha.message}</p>
          )}
        </Form.Group>

        {/* Confirmar Senha */}
        <Form.Group
          className="form-group-style mt-5"
          controlId="formConfirmarSenha"
        >
          <div className="w-100">
            <div className="d-flex align-items-start ms-1">
              <Form.Label className="form-label-style">
                Confirme sua senha
              </Form.Label>
            </div>
          </div>
          <InputGroup>
            <Form.Control
              type={showConfirmarSenha ? "text" : "password"}
              {...register("confirmarSenha", {
                required: "Confirme sua senha",
                validate: (value) =>
                  value === senha || "As senhas não coincidem",
              })}
              className="form-control-style"
              placeholder="Confirmar senha"
            />
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
            >
              {showConfirmarSenha ? <EyeSlashIcon /> : <EyeIcon />}
            </Button>
          </InputGroup>
          {errors.confirmarSenha && (
            <p className="m-0 text-danger">{errors.confirmarSenha.message}</p>
          )}
        </Form.Group>

        {/* Botão de submit */}
        <Button
          as="input"
          type="submit"
          className="button-style"
          value="Cadastrar"
        />
      </Form>
    </AuthCardLayout>
  );
}
