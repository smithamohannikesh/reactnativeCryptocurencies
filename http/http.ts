import axios from 'axios'

 const http=axios.create({
    baseURL:'https://data.messari.io/api/v1/'
})
export default http;