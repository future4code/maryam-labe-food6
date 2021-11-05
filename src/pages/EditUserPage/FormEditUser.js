import { Button, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useForm from "../../hooks/useForm";
import { ContainerEditUser } from "./styled";

const FormEditUser = () => {

    const { states, setters, requests } = useContext(GlobalContext)
    const {profile} = requests

    const [form, onChange, clear] = useForm({
        name: `${profile.name}`,
        email: `${profile.email}`,
        cpf: `${profile.cpf}`,
    })
    
    const handleEditUser = (event) => {
        event.preventDefault()
    }
    
    

    return (
        <div>
            <ContainerEditUser onSubmit={handleEditUser}>
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
                <Button type="submit">Salvar</Button>
            </ContainerEditUser>
        </div>
    )
}

export default FormEditUser