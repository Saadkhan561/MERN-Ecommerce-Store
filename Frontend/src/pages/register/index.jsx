import Login from "@/components/register/login";
import SignUp from "@/components/register/sigup";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
  // const [login, setLogin] = useState(false);

  const router = useRouter()

  const login = (name) => {
    if (router.query[name]) {
      delete router.query[name];
    } else {
      router.query[name] = true;
    }
    router.push(router, undefined, { shallow: true });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {/* MAIN DIV */}
      <div className="relative w-[900px] h-[500px] rounded-md shadow-2xl bg-slate-100">
        <div className="flex">
          {/* LOGIN DIV */}
          <Login />
          {/* SIGNUP DIV */}
          <SignUp />
        </div>
        <div
          className={
            eval(router.query.login)
              ? "absolute top-0 left-0 h-full z-10 w-1/2 rounded-md bg-gray-900 text-white translate-x-full duration-500 flex justify-center items-center text-xl font-semibold"
              : "absolute top-0 left-0 h-full z-10 w-1/2 rounded-md bg-gray-900 text-white translate-x-0 duration-500 flex justify-center items-center text-xl font-semibold"
          }
        >
          {eval(!router.query.login) ? (
            <div
              onClick={() => login('login')}
              className="flex gap-2 cursor-pointer"
            >
              <div>Already have an account? Login</div>
              <img
                src="/images/white-right-arrow.png"
                alt=""
                height={30}
                width={30}
              />
            </div>
          ) : (
            <div
              onClick={() => login('login')}
              className="flex gap-2 cursor-pointer"
            >
              <img
                className="rotate-180"
                src="/images/white-right-arrow.png"
                alt=""
                height={30}
                width={30}
              />
              <div>Don't have an account? Sign Up</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
