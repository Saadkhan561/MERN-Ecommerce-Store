import Card from "@/components/card";
import { useFetchAllCategories, useFetchAllProducts } from "@/hooks/query";
import Layout from "@/layout/layout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(filteredProducts);

  const router = useRouter();

  const {
    data: products,
    isLoading: isProductLoading,
    refetch,
  } = useFetchAllProducts();
  const { data: categories, isLoading: isCategoryLoading } =
    useFetchAllCategories();

  useEffect(() => {
    const { category: queryCategory } = router.query;
    if (queryCategory) {
      const filtered =
      products && queryCategory && products.filter((product) => product.category === queryCategory);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
      refetch();
      router.push("/products");
    }
    console.log(queryCategory)
  }, [ router.query.category,products]);

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="text-end w-4/5">
          <select className="border border-gray-500 rounded-md p-1 text-sm focus:outline-none cursor-pointer duration-200 text-gray-500" name="categories" onChange={(event) => router.push({pathname: "/products", query: {category: event.target.value}})}>
            <option className="p-1" value={''}>Show All</option>
            {categories && categories.map((category) => (
              <option className="p-1" value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-5 p-10">
          {isProductLoading ? (
            <div>Loading...</div>
          ) : (
            filteredProducts?.map((product) => (
              <Card
                key={product._id}
                name={product.name}
                price={product.price}
                imgUrl={product.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
