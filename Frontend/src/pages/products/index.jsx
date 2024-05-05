import Card from "@/components/card";
import { useFetchAllCategories, useFetchAllProducts } from "@/hooks/query";
import Layout from "@/layout/layout";
import React, { useState } from "react";

const BASE_URL = "http://localhost:4000";

const Products = () => {
  const [category, setCategory] = useState(null);
  console.log(category);

  const { data: products, isLoading: isProductLoading } = useFetchAllProducts();
  const { data: categories, isLoading: isCategoryLoading } =
    useFetchAllCategories();
  return (
    <Layout>
      <div className="flex">
        <div className="w-[200px] p-1 text-md border border-slate-300 shadow-2xl border-l-none border-b-none rounded-md h-screen">
          <ul className="p-1 w-full flex flex-col items-center">
            <li className="cursor-pointer hover:underline" onClick={() => setCategory(null)}>Show All</li>
            {categories &&
              categories.map((category) => (
                <li
                  onClick={() => setCategory(category._id)}
                  className="cursor-pointer hover:underline"
                  key={category._id}
                >
                  {category.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-5 p-10">
          {products &&
            products.map((product) => {
              if (product.category === category) {
                return (
                  <Card
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    imgUrl={product.imageUrl}
                  />
                );
              } else if (!category) {
                return (
                  <Card
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    imgUrl={product.imageUrl}
                  />
                );
              }
              return null; // If category doesn't match and category is not set
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
