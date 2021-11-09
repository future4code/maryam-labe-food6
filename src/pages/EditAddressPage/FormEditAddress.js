import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { URL_Base } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { updateAddress } from "../../services/user";
import { ContainerEditAddress } from "./styled";

const FormEditAddress = () => {

    const history = useHistory()
    const token = localStorage.getItem("token")

    const [form, onChange, clear, setForm] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const getAddress = () => {
        const headers = {
            headers: {
                auth: token
            }
        }
    
        axios
        .get(`${URL_Base}/profile/address`, headers )
        .then((res) => {
            setForm({
                street: res.data.address.street,
                number: res.data.address.number,
                neighbourhood: res.data.address.neighbourhood,
                city: res.data.address.city,
                state: res.data.address.state,
                complement: (res.data.address.complement ? res.data.address.complement : "")
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getAddress()
    }, [])
    
    const handleEditAddress = (event) => {
        event.preventDefault()
        updateAddress(form, history, setIsLoading, token)
    }

    return (
        <div>
            <ContainerEditAddress onSubmit={handleEditAddress}>
                <TextField
                    name={"street"}
                    value={form.street}
                    onChange={onChange}
                    label={"Rua"}
                    variant="outlined"
                    required
                />
                <TextField
                    name={"number"}
                    value={form.number}
                    onChange={onChange}
                    type="number"
                    label={"Número"}
                    variant="outlined"
                    required
                />
                <TextField
                    name={"complement"}
                    value={form.complement}
                    onChange={onChange}
                    label={"Complemento"}
                    variant="outlined"
                />
                <TextField
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    label={"Bairro"}
                    variant={"outlined"}
                    required
                />
                <TextField
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    label={"Cidade"}
                    variant={"outlined"}
                    required
                />
                <FormControl variant="outlined" required>
                    <InputLabel id="estado">Estado</InputLabel>
                    <Select
                        labelId={"estado"}
                        id={"estado"}
                        name={"state"}
                        value={form.state}
                        onChange={onChange}
                        label={"Estado"}
                    >
                        <MenuItem defaultValue>Selecione Estado</MenuItem>
                        <MenuItem value="AC">Acre</MenuItem>
                        <MenuItem value="AL">Alagoas</MenuItem>
                        <MenuItem value="AP">Amapá</MenuItem>
                        <MenuItem value="AM">Amazonas</MenuItem>
                        <MenuItem value="BA">Bahia</MenuItem>
                        <MenuItem value="CE">Ceará</MenuItem>
                        <MenuItem value="DF">Distrito Federal</MenuItem>
                        <MenuItem value="ES">Espírito Santo</MenuItem>
                        <MenuItem value="GO">Goiás</MenuItem>
                        <MenuItem value="MA">Maranhão</MenuItem>
                        <MenuItem value="MT">Mato Grosso</MenuItem>
                        <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                        <MenuItem value="MG">Minas Gerais</MenuItem>
                        <MenuItem value="PA">Pará</MenuItem>
                        <MenuItem value="PB">Paraíba</MenuItem>
                        <MenuItem value="PR">Paraná</MenuItem>
                        <MenuItem value="PE">Pernambuco</MenuItem>
                        <MenuItem value="PI">Piauí</MenuItem>
                        <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                        <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                        <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                        <MenuItem value="RO">Rondônia</MenuItem>
                        <MenuItem value="RR">Roraima</MenuItem>
                        <MenuItem value="SC">Santa Catarina</MenuItem>
                        <MenuItem value="SP">São Paulo</MenuItem>
                        <MenuItem value="SE">Sergipe</MenuItem>
                        <MenuItem value="TO">Tocantins</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit">
                    {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Salvar"}
                </Button>
            </ContainerEditAddress>
        </div>
    )
}

export default FormEditAddress