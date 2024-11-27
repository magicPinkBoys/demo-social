import axios from "axios";
import { UserData } from "./submitForm";

export type UserResponse = {
  "id": string,
  data: UserData
}

export const getAllUsers = async () => {
  const data : UserResponse[] = (await axios.get('https://asia-southeast1-test-social-graph.cloudfunctions.net/webApi/api/all-users')).data;
  console.log(data);
  return data;
};