import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fa948b9c075b4de98fd6a8ff5d64060b'
    }
})