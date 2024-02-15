import axios from 'axios'

export const getAllPersons = () => {
    return axios.get('http://localhost:3889/persons')
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((error) => {
        console.error('Axios error:', error);
      })
}