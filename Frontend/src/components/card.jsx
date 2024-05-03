import React from "react";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:4000";

const Card = ({ name, price, imgUrl }) => {
  const router = useRouter()
  return (
    <>
      {/* CARD DIV */}
      <div onClick={()=> router.push('/product_details')} className="w-[200px] h-[350px] border border-slate-300 shadow-2xl flex flex-col justify-between hover:scale-105 hover:cursor-pointer duration-200">
        <div>
          <img className="rounded-lg h-[200px]" src={`${BASE_URL}/images/${imgUrl}`} alt=""/>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mb-4">
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-lg text-gray-500 font-semibold">{price} Rs</div>
          </div>
          <div className=" bg-black text-white font-semibold hover:text-black hover:bg-white hover:cursor-pointer duration-200 flex justify-center text-lg p-1">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
