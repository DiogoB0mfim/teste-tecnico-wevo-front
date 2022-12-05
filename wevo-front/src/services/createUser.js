import axios from "axios";
import { BASE_URL } from "../constants/url";

const createUser = (form, gender) => {
  const body = {
    name: form.name,
    cpf: form.cpf,
    email: form.email,
    phone: form.phone,
    gender: gender,
    birth: form.birth,
  };

  axios
    .post(`${BASE_URL}/create`, body)

    .then((response) => {
      alert("Usuário criado!");
    })

    .catch((error) => {
      alert(error.response.data);
    });
};

export default createUser;
