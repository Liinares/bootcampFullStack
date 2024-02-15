import axios from 'axios'

export const createPerson = ({name, number, id}) => {
    return axios.post('http://localhost:3889/persons', {name, number, id})
        .then(response => {
            const {data} = response
            console.log(data)
        })
}