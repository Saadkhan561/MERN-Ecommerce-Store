import { useQuery } from "@tanstack/react-query"

export const useFetchAllProducts = (options) => {
    return useQuery({
        ...options,
        queryKey: "products",
        queryFn: fetchAllproducts
    })
}