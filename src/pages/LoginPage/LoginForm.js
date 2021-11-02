import React from "react";
import useForm from "../../hooks/useForm";
import {useHistory} from "react-router-dom";
import {ContainerInputs} from "./styled";
import {login} from "../../services/user"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return(
        <ContainerInputs>
            <form onSubmit={onSubmitForm}>
                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    placeholder={"E-mail"}
                    type={"email"}
                    title={"Digite seu e-mail"}
                    required
                />
                
                <input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    placeholder={"Senha"}
                    type={"password"}
                    title={"Digite sua senha"}
                    required
                />

                <button type={"submit"}>Entrar</button>
            </form>
        </ContainerInputs>
    )

}

export default LoginForm;
