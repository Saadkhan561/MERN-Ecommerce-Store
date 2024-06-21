import { useFetchSearchResults } from "@/hooks/query";
import { useRouter } from "next/router";
import Layout from "@/layout/layout";
import Card from "@/components/card";
import React from "react";

const SearchResults = () => {
  const router = useRouter();
  const queryParam = router.query.q;
  const { data: searchResults, isLoading } = useFetchSearchResults(
    { query: queryParam },
    { enabled: Boolean(queryParam) }
  );
  console.log(searchResults);
  return (
    <Layout>
      <div className="flex justify-center">
      <div className="w-4/5 mob_display:w-11/12">
        <div className="flex flex-wrap gap-8 p-10 mob_display_product:gap-x-4 mob_display_product:gap-y-10 mob_display_product:p-2 mob_display:justify-center">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            searchResults?.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                imgUrl={product.imageUrl}
              />
            ))
          )}
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
