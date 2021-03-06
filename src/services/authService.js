import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";


const login = (username, password) => {

    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const register = (username, email, password, role) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
        role,
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
    register,
    logout,
    getCurrentUser,
};
