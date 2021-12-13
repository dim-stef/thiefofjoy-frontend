import { useQuery } from "react-query";
import { PostLogin } from "../interface";
import axios from "axios";

async function login(credentials: PostLogin) {
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/token/`,
      JSON.stringify({
        username: credentials.email,
        password: credentials.password,
      })
    );
    return response.data.token;
  } catch (e) {}
}

export default login;
