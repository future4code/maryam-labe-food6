import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from '../../services/user'
import { ContainerSignUp } from "./styled";

const FormSignUp = () => {
    useUnprotectedPage()

    const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    });

  const history = useHistory()
  
  const password = document.getElementById("password")
  const confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
    signUp(form, clear, history)    
  }
}


const handleSignUp = (ev) => {
    ev.preventDefault();
    validatePassword()
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
        <TextField
          name={"password"}
          type="password"
          variant="outlined"
          id="password"
          value={form.password}
          onChange={onChange}
          label="Senha"
          required
        />
        <TextField
          name={"password"}
          type="password"
          variant="outlined"
          id="confirm_password"
          label="Confirmar Senha"
          required
        />
        <Button type="submit">Criar</Button>
      </ContainerSignUp>
  );
};

export default FormSignUp;
