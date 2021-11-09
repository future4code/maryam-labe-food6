import { Button, CircularProgress, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { URL_Base } from "../../constants/urls";
import { GlobalContext } from "../../contexts/GlobalContext";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/user";
import { ContainerEditUser } from "./styled";

const FormEditUser = () => {

    const history = useHistory()
    const token = localStorage.getItem("token")


    const [form, onChange, clear, setForm] = useForm({
        name: "",
        email: "",
        cpf: "",
    }) 
    
    const getProfile = () => {
        const headers = {
            headers: {
                auth: token
            }
        }

        axios
        .get(`${URL_Base}/profile`, headers)
        .then((res) => {
            setForm({
                name: res.data.user.name,
                email: res.data.user.email,
                cpf: res.data.user.cpf,
            })
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const [isLoading, setIsLoading] = useState(false)
    
    
    const handleEditUser = (event) => {
        event.preventDefault()
        updateProfile(form, history, setIsLoading, token)
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