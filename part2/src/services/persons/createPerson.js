import axios from 'axios'

export const createPerson = ({name, number}) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/persons`, {name, number})
        .then(response => {
            const {data} = response
            return data
        })
}