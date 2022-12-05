import axios from "axios";
import { BASE_URL } from "../constants/url";

const updatePhone = (id, phone) => {
  const body = {
    id: id,
    phone: phone,
  };

  axios
    .put(`${BASE_URL}/update-phone`, body)

    .then((response) => {
      alert("Número alterado!");
    })

    .catch((error) => {
      console.log(error.response.data);
    });
};

export default updatePhone;
