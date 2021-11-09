import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/user";
import { ContainerEditUser } from "./styled";

const FormEditUser = () => {

    const history = useHistory()

    const { states, setters, requests } = useContext(GlobalContext)
    const {profile} = requests

    const [form, onChange, clear] = useForm({
        name: `${profile.name}`,
        email: `${profile.email}`,
        cpf: `${profile.cpf}`,
    })

    const [isLoading, setIsLoading] = useState(false)

    
    const handleEditUser = (event) => {
        event.preventDefault()
        updateProfile(form, history, setIsLoading)
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
                <Button type="submit">
                    {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Salvar"}
                </Button>
            </ContainerEditUser>
        </div>
    )
}

export default FormEditUser