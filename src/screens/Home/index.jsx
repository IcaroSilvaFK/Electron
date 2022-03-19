import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import SvgLogin from "../../assets/shadowoff.svg";

import { Input } from "../../components/Input";

import { Container, Box, Card, Separato, Button } from "./styles";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(4, "O campo precisa de no minimo 4 caracteres")
    .required("O campo é obrigatório"),
  email: yup
    .string()
    .email("Por favor digite um emial valido")
    .required("O campo é obrigatório"),
});

export function Home() {
  const props = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }
  const color =
    props.formState.errors.email === props.formState.errors.password
      ? true
      : false;

  console.log(!!props.formState.errors.password);

  return (
    <Container>
      <Card>
        <Box>
          <h3>Login Page</h3>
          <Separato />
          <FormProvider {...props}>
            <form onSubmit={props.handleSubmit(onSubmit)}>
              <Input
                name="email"
                placeholder="Digite seu email"
                type="text"
                icon={
                  <MdEmail
                    color={!!props.formState.errors.email ? "#FC8181" : "#fff"}
                  />
                }
              />
              <Input
                name="password"
                placeholder="Digite sua senha"
                type="text"
                icon={
                  <RiLockPasswordFill
                    color={
                      !!props.formState.errors.password ? "#FC8181" : "#fff"
                    }
                  />
                }
              />
              <div className="containerLink">
                <Link to="/register">Ainda Não possui conta?</Link>
              </div>
              <Button isValid={color}>Entrar</Button>
            </form>
          </FormProvider>
        </Box>
        <Box>
          <img src={SvgLogin} alt="Worker html correction" />
        </Box>
      </Card>
    </Container>
  );
}
