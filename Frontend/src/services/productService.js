import axios from "axios"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const fetchAllproducts = async() => {
    try {
        const products = await axios.get(`${BASE_URL}/getAllProducts`)
        return products.data
    } catch(err) {
        throw new Error(err.message)
    }
}

export const fetchAllCategories =async() => {
    try {
        const categories = await axios.get(`${BASE_URL}/getCategories`)
        return categories.data
    } catch(err) {
        throw new Error(err)
    }
}