import axios from 'axios'

const api = axios.create({
    baseURL:'http://localiza-produtos-backend.herokuapp.com/'
})


export default api;