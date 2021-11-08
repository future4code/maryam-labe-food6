import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";
import { ContainerBotao, ContainerSignUp } from "./styled";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const FormSignUp = () => {
  useUnprotectedPage();
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const history = useHistory();

  const [hidePassword, setHidePassword] = useState(false);
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
      confirm_password.setCustomValidity("");
      signUp(form, clear, history, setIsLoading);
    }
  }

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  const handleSignUp = (ev) => {
    ev.preventDefault();
    validatePassword();
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
  };

  return (
    <ContainerSignUp onSubmit={handleSignUp}>
      <TextField
        name={"name"}
        value={form.name}
        variant="outlined"
        onChange={onChange}
        label="Nome"
        required
      />
      <TextField
        name={"email"}
        type="email"
        variant="outlined"
        value={form.email}
        onChange={onChange}
        label="E-mail"
        required
      />
      <TextField
        name={"cpf"}
        value={form.cpf}
        variant="outlined"
        onChange={onChange}
        label="CPF"
        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
        title="CPF inválido - Use apenas números"
        required
      />
      <FormControl variant="outlined" required>
        <InputLabel>Senha</InputLabel>
        <OutlinedInput
          id="password"
          type={hidePassword ? "text" : "password"}
          value={form.password}
          onChange={onChange}
          name={"password"}
          variant="outlined"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={showPassword}
                edge="end"
              >
                {hidePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Senha"
          placeholder="senha"
        />
      </FormControl>
      <FormControl variant="outlined" required>
        <InputLabel>Confirmar senha</InputLabel>
        <OutlinedInput
          name={"password"}
          type={hidePassword ? "text" : "password"}
          variant="outlined"
          id="confirm_password"
          label="Confirmar Senha"
          placeholder="Confirmar Senha"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={showPassword}
                edge="end"
              >
                {hidePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <ContainerBotao>
        <Button type="submit">
          {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Criar"}
        </Button>
      </ContainerBotao>
    </ContainerSignUp>
  );
};

export default FormSignUp;
