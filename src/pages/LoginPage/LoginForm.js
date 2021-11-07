import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { ContainerButton, ContainerInputs, Form } from "./styled";
import { login } from "../../services/user";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();
  const [hidePassword, setHidePassword] = useState(false);

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history);
  };

  return (
    <ContainerInputs>
      <Form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          variant="outlined"
          label="E-mail"
          type={"email"}
          title={"Digite seu e-mail"}
          required
        />

        <OutlinedInput
          name={"password"}
          value={form.password}
          onChange={onChange}
          variant="outlined"
          label="Senha"
          type={hidePassword ? "text" : "password"}
          title={"Digite sua senha"}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={showPassword} edge="end">
                {hidePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Senha"
          placeholder="senha"
        />
        <ContainerButton>
          <Button type={"submit"}>Entrar</Button>
        </ContainerButton>
      </Form>
    </ContainerInputs>
  );
};

export default LoginForm;
