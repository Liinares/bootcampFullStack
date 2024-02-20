import axios from 'axios'

export const createPerson = ({name, number}) => {
    return axios.post('http://localhost:3001/api/persons', {name, number})
        .then(response => {
            const {data} = response
            return data
        })
}