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
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          required
        />
        <input
          name={"email"}
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          />
        <input
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          placeholder={"CPF"}
          pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
          title="CPF inválido - Use apenas números"
          required
          />
        <input
          name={"password"}
          type="password"
          id="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
        />
        <input
          name={"password"}
          type="password"
          id="confirm_password"
          placeholder={"Confirmar Senha"}
          required
        />
        <button type="submit">Criar</button>
      </ContainerSignUp>
  );
};

export default FormSignUp;
