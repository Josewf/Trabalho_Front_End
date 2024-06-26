import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    navigate("/main");
  };

  return (
    <div className="login-container">
      <div className="box">
        <div className="header">
          <h1>Faça seu login</h1>
          <p className="description">Seja bem vindo ao nosso app!</p>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label className="label" htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email && <div className="error">{errors.email.message}</div>}
          </div>
          <div className="input-container">
            <label className="label" htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && <div className="error">{errors.password.message}</div>}
          </div>
          <button type="submit" disabled={!isValid}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
