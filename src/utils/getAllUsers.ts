import axios from "axios";
import { UserData } from "./submitForm";
import { Data } from "../models/Data";
import { DataType } from "../models/enums/DataType";
import { skills } from "../data/graphData";

export type UserResponse = {
  "id": string,
  data: UserData
}

export const getAllUsers = async () => {
  const data : UserResponse[] = (await axios.get('https://asia-southeast1-test-social-graph.cloudfunctions.net/webApi/api/all-users')).data;
  const users : Data[] = [];
  data.forEach((user) => {
    const index = parseInt(user.data.skill.match(/\d+/g)![0]);

    users.push(new Data(user.id, "", DataType.User, skills[index]));
  });
  console.log(users);
  return users;
};