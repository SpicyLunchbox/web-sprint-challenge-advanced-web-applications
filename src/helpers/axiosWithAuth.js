import axios from "axios";

//applies a header containing stored authorization token to axios calls
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token,
        }
    })
}