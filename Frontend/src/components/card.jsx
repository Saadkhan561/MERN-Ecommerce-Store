import React from "react";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:4000";

const Card = ({ id, name, price, imgUrl }) => {
  const router = useRouter()
  return (
    <>
      {/* CARD DIV */}
      <div onClick={()=> router.push(`/products/${id}`)} className="w-[200px] mob_display:w-[160px] h-[350px] mob_display:h-[280px] border border-slate-300 shadow-2xl flex flex-col justify-between hover:scale-105 hover:cursor-pointer duration-200">
        <div className="p-4 mob_display:flex mob_display:justify-center mob_display:p-4">
          <img className="rounded-lg h-[200px] mob_display:h-[130px] mob_display:w-fit" src={`${BASE_URL}/images/${imgUrl}`} alt=""/>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mb-4">
            <div className="text-xl mob_display:text-base font-semibold">{name}</div>
            <div className="text-lg mob_display:text-sm text-gray-500 font-semibold">{price} Rs</div>
          </div>
          <div className=" bg-black text-white font-semibold hover:text-black hover:bg-white hover:cursor-pointer duration-200 flex justify-center text-lg mob_display:text-xs p-1">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
