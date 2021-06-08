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

const postMembershipOrders = (name, surname, email, address, city, postalCode, phoneNumber, membership, startDate, expirationDate, userId, status) => {
    return axios.post("http://localhost:8080/api/membershipOrder/", {
        name,
        surname,
        email,
        address,
        city,
        postalCode,
        phoneNumber,
        membership,
        startDate,
        expirationDate: expirationDate,
        userId: userId,
        status: status,
    }, {
        headers: authHeader()
    });
}

const getMembershipCurrentUser = (id) => {
    return axios.get("http://localhost:8080/api/membershipOrder/" + id, { headers: authHeader() });
}

const getAllMembershipOrders = () => {
    return axios.get("http://localhost:8080/api/membershipOrder/", { headers: authHeader() });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPublicContent,
    getUserBoard,
    getAdminBoard,
    getNews,
    postNews,
    postMembershipOrders,
    getMembershipCurrentUser,
    getAllMembershipOrders,
};