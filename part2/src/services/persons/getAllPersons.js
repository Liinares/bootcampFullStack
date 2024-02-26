import axios from 'axios'

export const getAllPersons = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/persons`)
    .then((response) => {
      const { data } = response;
      return data;
    })
}