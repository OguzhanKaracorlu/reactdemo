import axios from "axios";

export const singup = (body) => {
    return axios.post('/api/users', body);
}