import React from "react";
import useForm from "../../hooks/useForm";
import {useHistory} from "react-router-dom";
import {ContainerInputs, Form} from "./styled";
import {login} from "../../services/user"
import { TextField, Button } from "@material-ui/core";

const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return(
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
                
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    variant="outlined"
                    label="Senha"
                    type={"password"}
                    title={"Digite sua senha"}
                    required
                />

                <Button type={"submit"}>Entrar</Button>
            </Form>
        </ContainerInputs>
    )

}

export default LoginForm;
