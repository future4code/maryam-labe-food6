import React from "react";

const FormEditUser = () => {

    const [form, onChange, clear] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
        })

    return (
        <div>
            Formulário
        </div>
    )
}

export default FormEditUser