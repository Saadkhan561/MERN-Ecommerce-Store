import { fetchAllproducts } from "@/services/productService"
import { fetchUser } from "@/services/userService"
import { useQuery } from "@tanstack/react-query"

// FOR USERS
export const useFetchUser = (options) => {
    return useQuery({
        ...options,
        queryKey: ['user'],
        queryFn: fetchUser
    })
}

export const useFetchAllProducts = (options) => {
    return useQuery({
        ...options,
        queryKey: ["products"],
        queryFn: fetchAllproducts
    })
}