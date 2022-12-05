import axios from "axios";
import { BASE_URL } from "../constants/url";

const getAllUsers = (setUsers) => {
  axios
    .get(`${BASE_URL}/get-all`)

    .then((response) => {
      setUsers(response.data.data);
    })

    .catch((error) => {
      console.error(error.message);
    });
};

export default getAllUsers;
