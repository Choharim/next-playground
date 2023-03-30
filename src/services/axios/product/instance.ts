import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DUMMYJSON_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default axiosInstance
