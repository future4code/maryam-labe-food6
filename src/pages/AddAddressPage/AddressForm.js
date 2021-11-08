import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { address } from "../../services/user";
import { ContainerAddress } from "./styled";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { URL_Base } from "../../constants/urls";
import { goToFeed } from "../../routes/coordinator";

const AddressForm = () => {
  const token = localStorage.getItem("token")
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  
  const addAddress = () => {
    const headers = { 
      headers: {
        auth: `${token}`
    }}
    setIsLoading(true)
    
    axios
    .put(`${URL_Base}/address`, form, headers)
    .then((res) => {
      setIsLoading(false)
      localStorage.setItem('token', res.data.token)
      goToFeed(history)
      clear()
    })
    .catch((err) => {
      setIsLoading(false)
      console.log(err.message)
    })
  }

  const history = useHistory();

  const handleAddress = (ev) => {
    ev.preventDefault();
    addAddress()
  };

  return (
    <div>
      <ContainerAddress onSubmit={handleAddress}>
        <TextField
          name={"street"}
          value={form.street}
          onChange={onChange}
          label={"Rua"}
          required
          variant="outlined"
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={onChange}
          type="number"
          label={"Numero"}
          required
          variant="outlined"
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro"}
          required
          variant="outlined"
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={onChange}
          label={"Cidade"}
          required
          variant="outlined"
        />
        <FormControl variant="outlined" required>
          <InputLabel id="estado">Estado</InputLabel>
          <Select
            id="estado"
            name="state"
            value={form.state}
            onChange={onChange}
            required
            label="Select"
            variant="outlined"
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
        <TextField
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          label={"Complemento"}
          variant="outlined"
        />
        <Button type="submit">
          {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Salvar"}
        </Button>
      </ContainerAddress>
    </div>
  );
};

export default AddressForm;
