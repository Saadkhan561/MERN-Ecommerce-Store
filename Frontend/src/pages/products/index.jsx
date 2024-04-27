import { useFetchUser } from '@/hooks/query';
import React from 'react';

const Products = () => {
    const {data, isLoading} = useFetchUser()
    return ( 
        <div>
            {data}
        </div>
     );
}
 
export default Products;