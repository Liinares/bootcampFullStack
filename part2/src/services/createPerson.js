import axios from 'axios'

export const createPerson = ({name, number}) => {
    return axios.post('http://localhost:3889/persons', {name, number})
        .then(response => {
            const {data} = response
            return data
        })
}