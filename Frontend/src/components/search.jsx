import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState()
    const router = useRouter()
  return (
    <div className="flex justify-center mr-5">
      <div>
        <form className="flex items-center gap-2 border rounded-xl border-slate-300 p-2 w-[300px]">
          <input
            className="focus:outline-none text-gray-500 text-sm w-full"
            type="text"
            placeholder="Search here..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <img
          onClick={() => query && router.push(`/products?q=${query}`)}
            className="cursor-pointer"
            src="/images/search.png"
            alt=""
            height={20}
            width={20}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
