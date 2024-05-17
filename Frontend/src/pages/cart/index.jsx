import React from "react";
import Layout from "@/layout/layout";
import useCartStore from "@/store/cart";

const Cart = () => {
  const { cart } = useCartStore();
  const cartLength = Object.keys(cart).length;
  console.log(cart);

  const BASE_URL = "http://localhost:4000";
  return (
    <Layout>
      <div className="flex justify-center p-1">
        <div className="w-4/5 h-screen p-2 border border-black">
        {cartLength === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          Object.entries(cart).map(([key, value]) => {
            return (
              <li className="">
                <div  className="flex gap-2 items-center">
                  <div>
                    <img
                      src={`${BASE_URL}/images/${value.imageUrl}`}
                      alt=""
                      height={40}
                      width={40}
                    />
                  </div>
                  <div>{value.name}</div>
                  <div>{value.quantity}</div>
                  <div>
                    <img
                    className="hover:bg-slate-100 duration-200 rounded-full p-1 cursor-pointer"
                      src="/images/trash.png"
                      alt=""
                      height={25}
                      width={25}
                    />
                  </div>
                </div>
              </li>
            );
          })
        )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
