import axios from "axios";

export type UserData = {
  "educationLevel": string,
  "industry": string,
  "job": string,
  "member": string,
  "salary": string,
  "skill": string,
  "workDescription": string
  "yearOfWork": string,
  "dateOfBirth": string,
  "email": string,
  "firstName": string,
  "lastName": string,
  "phone": string
}

export const submitFormPost = async (data: UserData) => {
  const response = await axios.post('https://asia-southeast1-test-social-graph.cloudfunctions.net/webApi/api/user', {
    data,
  });

  if (response.status === 200) {
    console.log('Form submitted Successfully!');
    console.log('Submitted Data: ', data);
  } else {
    console.error('Failed to submit form');
  }
};