import axios from 'axios'

export const loginService = (credentials) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/login`, credentials)
        .then(response => {
            const {data} = response
            return data
        })
}