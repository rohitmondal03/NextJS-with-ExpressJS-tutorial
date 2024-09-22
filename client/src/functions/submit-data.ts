import axios from "axios"
import { SERVER_BASE_URL } from "../../utils/config"

export const submitData = async ({ name, email }: {
  name: string;
  email: string;
}) => {
  // await axios.post(`${SERVER_BASE_URL}/add-data`, {
  //   name,
  //   email,
  // })

  await fetch(`${SERVER_BASE_URL}/add-data`, {
    body: JSON.stringify({ name, email }),
    method: "POST",
    headers: {
      "Content-type": "application/json",
    }
  })
    .catch(err => console.log("Error: ",err))
}