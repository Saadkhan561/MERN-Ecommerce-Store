import { useFetchAllProducts } from "@/hooks/query";
import React from "react";

const Products = () => {
  const { data, isLoading } = useFetchAllProducts();
  return (
    <div>
      {data &&
        data.map((product) => (
          <div>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        ))}
    </div>
  );
};

export default Products;
