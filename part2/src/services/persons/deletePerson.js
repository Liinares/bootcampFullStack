import axios from 'axios'

export const deletePerson = (id) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/api/persons/${id}`)
        .then(response => {
            const {data} = response
            return data
        })
}