import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const sideBar = (name) => {
    if (router.query[name]) {
      delete router.query[name];
    } else {
      router.query[name] = true;
    }
    router.push(router, undefined, { shallow: true });
  };

  const products = (name) => {
    if (router.query[name]) {
      delete router.query[name];
    } else {
      router.query[name] = true;
    }
    router.push(router, undefined, { shallow: true });
  };

  return (
    <div className="">
      <div className="full_screen:hidden p-8 flex justify-end">
        <button onClick={() => sideBar("open")}>
          <img
            className="hover:cursor-pointer"
            src="/images/menu.png"
            alt=""
            height={25}
            width={25}
          />
        </button>
      </div>
      {/* FULL SCREEN NAVBAR */}
      <ul className="flex justify-end p-1 pt-6 text-lg mob_display:hidden">
        <li className="navbar_li">Home</li>
        <li className="navbar_li">Shop</li>
        <li className="navbar_li relative flex items-center gap-2">
          Products{" "}
          <img
            onClick={() => products("products")}
            className={
              eval(router.query.products)
                ? "-rotate-90 cursor-pointer duration-200"
                : "rotate-90 cursor-pointer duration-200"
            }
            src="/images/right-arrow.png"
            alt=""
            height={15}
            width={15}
          />
          <ul
            className={
              eval(router.query.products)
                ? "absolute text-start top-10 text-sm shadow-md border border-slate-300 rounded-md w-32"
                : "absolute text-start top-10 text-sm shadow-md border border-slate-300 rounded-md w-32 hidden"
            }
          >
            <li className="cursor-pointer hover:bg-slate-100 duration-200 p-1">
              Shirts
            </li>
            <li className="cursor-pointer hover:bg-slate-100 duration-200 p-1">
              Perfumes
            </li>
          </ul>
        </li>
        <li className="navbar_li flex justify-center relative">
          <img src="/images/cart.png" alt="cart" height={25} width={25} />
          <div className="absolute top-0 right-4 border border-black h-5 w-5 rounded-full font-bold text-sm bg-black text-white">
            5
          </div>
        </li>
        <li className="navbar_li flex justify-center">
          <img src="/images/account.png" alt="account" height={25} width={25} />
        </li>
      </ul>
      {/* SMALL SCREEN NAVBAR */}
      <div
        className={
          eval(router.query.open)
            ? "fixed top-0 right-0 w-[300px] border-slate-300 bg-white shadow-2xl z-10 h-screen full_screen:hidden"
            : "absolute left-full hidden full_screen:hidden"
        }
      >
        <ul>
          <li className="p-4 text-end">
            <button>
              <img
                className="border border-slate-400 rounded-full p-1"
                onClick={() => sideBar("open")}
                src="/images/right-arrow.png"
                alt=""
                height={25}
                width={25}
              />
            </button>
          </li>
          <li className="p-3 hover:bg-slate-200 hover:cursor-pointer duration-200 font-semibold flex justify-between">
            Home
          </li>
          <li className="p-3 hover:bg-slate-200 hover:cursor-pointer duration-200 font-semibold">
            Shop
          </li>
          <li
            onClick={() => products("products")}
            className="flex items-center gap-2 p-3 hover:bg-slate-200 hover:cursor-pointer duration-200 font-semibold"
          >
            Products{" "}
            <img
              className={
                eval(router.query.products)
                  ? "-rotate-90 cursor-pointer duration-200"
                  : "rotate-90 cursor-pointer duration-200"
              }
              src="/images/right-arrow.png"
              alt=""
              height={15}
              width={15}
            />
          </li>
          <div
            className={eval(router.query.products) ? "ml-3 text-sm" : "hidden"}
          >
            <li className="p-3 hover:bg-slate-200 hover:cursor-pointer font-semibold">
              Shirts
            </li>
            <li className="p-3 hover:bg-slate-200 hover:cursor-pointer font-semibold">
              Perfumes
            </li>
          </div>
          <li className="p-3 hover:bg-slate-200 hover:cursor-pointer duration-200 font-semibold">
            My Cart
          </li>
          <li className="p-3 hover:bg-slate-200 hover:cursor-pointer duration-200 font-semibold">
            Account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
