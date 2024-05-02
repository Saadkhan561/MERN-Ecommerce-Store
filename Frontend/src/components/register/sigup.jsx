import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignUp = () => {
  const [passHidden, setPassHidden]=  useState(true)

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const signupSchema = yup.object({
    email: yup.string().required("Email is required"),
    name: yup.string().required("Name is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: initialValues,
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 pt-10">
      <div className="text-3xl font-semibold">Sign Up</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 pt-5 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm  text-slate-500" htmlFor="name">
            Enter your name
          </label>
          <div className="flex gap-1 items-center border-b border-b-slate-300">
            <input
              className="input_field"
              type="text"
              id="name"
              {...register("name")}
            />
            <img src="/images/account_sm.png" alt="" height={20} width={20} />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm  text-slate-500" htmlFor="email">
            Enter your email
          </label>
          <div className="flex gap-1 items-center border-b border-b-slate-300">
            <input
              className="input_field"
              type="email"
              id="email"
              {...register("email")}
            />
            <img src="/images/input_email.png" alt="" height={20} width={20} />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm  text-slate-500" htmlFor="password">
            Enter your password
          </label>
          <div className="flex gap-1 items-center border-b border-b-slate-300">
            {passHidden ? <input
              className="input_field"
              type="password"
              id="password"
              {...register("password")}
            /> : <input
            className="input_field"
            type="text"
            id="password"
            {...register("password")}
          /> }
            {passHidden ? <img className="cursor-pointer" onClick={() => setPassHidden(!passHidden)} src="/images/pass_eye.png" alt="" height={20} width={20} /> : <img className="cursor-pointer" onClick={() => setPassHidden(!passHidden)} src="/images/pass_eye_hidden.png" alt="" height={20} width={20} />}
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>
        <div className="text-end">
          <button
            className="font-semibold bg-gray-900 text-white p-1 pl-2 pr-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
