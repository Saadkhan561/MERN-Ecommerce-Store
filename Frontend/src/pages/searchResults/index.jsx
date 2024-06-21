import { useFetchSearchResults } from '@/hooks/query'
import { useRouter } from 'next/router'
import React from 'react'

const SearchResults = () => {
    const router = useRouter()
    const queryParam = router.query
    console.log(queryParam)
    // const {data: searchResults} = useFetchSearchResults({param})
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults