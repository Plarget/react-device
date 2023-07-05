import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const searchServices = {
  getPosts: async (query) => {
    return axios.get(`${BASE_URL}/posts`, {
      params: { _limit: 10, query }
    }).then(({ data }) => data)
  }
}

export default searchServices