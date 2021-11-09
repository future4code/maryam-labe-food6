import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import useForm from "../../hooks/useForm";
import { goToProfile } from "../../routes/coordinator";
import { addressEdit, getAddress, updateProfile } from "../../services/user";
import { ContainerEditAddress } from "./styled";

const FormEditAddress = () => {

    const history = useHistory()
    const {requests} = useContext(GlobalContext)
    const {addressUser} = requests

    const [form, onChange, clear] = useForm({
        street: `${addressUser.street}`,
        number: `${addressUser.number}`,
        neighbourhood: `${addressUser.neighbourhood}`,
        city: `${addressUser.city}`,
        state: `${addressUser.state}`,
        complement: `${addressUser.complement}`,
    })
    const [isLoading, setIsLoading] = useState(false)

    
    const handleEditAddress = (event) => {
        event.preventDefault()
        addressEdit(form, history, setIsLoading)
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