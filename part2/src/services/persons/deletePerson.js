import axios from 'axios'

export const deletePerson = (id) => {
    return axios.delete(`http://localhost:3001/api/persons/${id}`)
        .then(response => {
            const {data} = response
            return data
        })
}