import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getNews = () => {
    return axios.get("http://localhost:8080/api/news/", { headers: authHeader() });
}

const postNews = (title, content) => {
    return axios.post("http://localhost:8080/api/news/", {
        title,
        content
    }, {
        headers: authHeader()
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPublicContent,
    getUserBoard,
    getAdminBoard,
    getNews,
    postNews,
};