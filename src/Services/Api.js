import axios from "axios"

const BASE_URL = 'https://reqres.in/api/';


//Kullanıcıları çek
export const fetchUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}users?page=1`);
      return response.data;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  };