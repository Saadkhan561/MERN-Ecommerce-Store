import { userStore } from "@/store/store"
import axios from "axios"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const loginUser = async(data) => {
    try {
        const user = await axios.post(`${BASE_URL}/loginUser`, data)
        const userData = JSON.stringify(user.data.user)
        localStorage.setItem('user', userData)
        localStorage.setItem('token', user.data.token)
        return user.data
    } catch(err) {
        throw err.response.data.error
    }
}

export const signupUser = async(data) => {
    try {
        const user = await axios.post(`${BASE_URL}/createUser`, data)
        return user.data
    } catch(err) {
        throw err.response.data.error
    }
}