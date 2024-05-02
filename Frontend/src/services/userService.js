import axios from "axios"
const BASE_URL = process.env.PUBLIC_BASE_URL

export const fetchUser = async() => {
    try {
        const user = await axios.get('https://localhost:4000/loginUser')
        return user.data
    } catch(err) {
        throw new Error(err.message)
    }
}