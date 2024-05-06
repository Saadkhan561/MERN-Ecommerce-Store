import Card from "@/components/card";
import { useFetchAllCategories, useFetchAllProducts } from "@/hooks/query";
import Layout from "@/layout/layout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:4000";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState(null);

  const router = useRouter();

  const { data: products, isLoading: isProductLoading, refetch } = useFetchAllProducts();
  const { data: categories, isLoading: isCategoryLoading } =
    useFetchAllCategories();

  useEffect(() => {
    if (category) {
      const filtered =
        products && products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
      console.log(filteredProducts);
      router.push({ pathname: "/products", query: { category: category } });
    } else {
      setFilteredProducts(products);
      refetch()
      router.push("/products");
    }
  }, [category, products]);

  return (
    <Layout>
      <div className="flex">
        <div className="w-[200px] p-1 text-md border border-slate-300 shadow-2xl border-l-none border-b-none rounded-md h-screen">
          <ul className="p-1 w-full flex flex-col items-center">
            <li
              className="cursor-pointer hover:underline"
              onClick={() => setCategory(null)}
            >
              Show All
            </li>
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
