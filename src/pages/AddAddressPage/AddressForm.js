import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { address } from "../../services/user";
import { ContainerAddress } from "./styled";

const AddressForm = () => {

  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const history = useHistory();

  const handleAddress = (ev) => {
    ev.preventDefault();
    address(form, clear, history);
  };

  return (
    <div>
      <ContainerAddress onSubmit={handleAddress}>
        <input
          name={"street"}
          value={form.street}
          onChange={onChange}
          placeholder={"Rua"}
          required
        />
        <input
          name={"number"}
          value={form.number}
          onChange={onChange}
          type="number"
          placeholder={"Numero"}
          required
        />
        <input
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          placeholder={"Bairro"}
          required
        />
        <input
          name={"city"}
          value={form.city}
          onChange={onChange}
          placeholder={"Cidade"}
          required
        />
        <select
          id="estado"
          name="state"
          value={form.state}
          onChange={onChange}
          required
        >
            <option defaultValue>Selecione Estado</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
        <input
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          placeholder={"Complemento"}
        />
        <button type="submit">Salvar</button>
      </ContainerAddress>
    </div>
  );
};

export default AddressForm;
