import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp/',
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
  },
})

export default axiosClient
