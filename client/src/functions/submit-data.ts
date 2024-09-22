import axios from "axios";
import { SERVER_BASE_URL } from "../../utils/config"

export const submitData = async ({ name, email }: {
  name: string;
  email: string;
}) => {
  await axios.post(`${SERVER_BASE_URL}/add-user`, {
    name,
    email
  })
    .catch(err => console.log("Error: " + err))
}