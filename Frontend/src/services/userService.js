import axios from "axios"

export const fetchUser = async() => {
    try {
        const user = await axios.get(`${process.env.PUBLIC_BASE_URL}/loginUser`)
        return user.data
    } catch(err) {
        throw new Error(err.message)
    }
}