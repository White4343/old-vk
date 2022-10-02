import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e7c541b8-7811-4b28-b480-1699a1090fb1"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const followAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    authUser(){
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`).then(response => response.data)
    }
}