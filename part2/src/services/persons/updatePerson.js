import axios from 'axios';

export const updatePerson = ({ name, number, id }) => {
    return axios.put(`${process.env.REACT_APP_API_URL}/api/persons/${id}`, { name, number })
        .then(response => {
            const { data } = response;
            return data;
        })
};
