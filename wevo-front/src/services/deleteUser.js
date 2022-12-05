import axios from "axios";
import { BASE_URL } from "../constants/url";

const deleteUser = (id) => {
  axios
    .delete(`${BASE_URL}/delete/${id}`)

    .then((response) => {
      alert("Usuário deletado!");
    })

    .catch((error) => {
      alert(error.response.data);
    });
};

export default deleteUser;
