import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from '../../services/user'

const SignUpPage = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const history = useHistory()

  const validarSenha = () => {
    senha = document.getElementsByName('senha').value;
    senha2 = document.getElementsByName('senha2').value;
 
    if(senha!= senha2) {
         senha2.setCustomValidity("Senhas diferentes!");
        return false; 
    }
    return true;
 }
  
  const handleSignUp = (ev) => {
    ev.preventDefault();
    signUp(form, clear, history);
  };

  return (
    <div>
      <h1>SignUpPage</h1>
      <form onSubmit={handleSignUp}>
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
          id="senha"
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
          required
        />
        <input
          name={"password"}
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
        />
        <input
          name={"password"}
          type="password"
          value={form.password}
          onChange={validarSenha}
          placeholder={"Senha"}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignUpPage;
