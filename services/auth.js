import axios from 'axios';

const url = 'http://192.168.0.28:4000/api/v1';

export async function signup(signUpInfo) {
  console.log(signUpInfo);
  const data = await axios.post(`${url}/auth/register`, signUpInfo);
  return data.data;
}

export async function signin(signInInfo) {
  return await axios.post(`${url}/auth/signin`, signInInfo);
}
