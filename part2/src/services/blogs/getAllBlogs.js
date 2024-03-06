import axios from 'axios'

export const getAllBlogs = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`)
    .then((response) => {
      const { data } = response;
      return data;
    })
}