import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-logocontainer mx-auto md:flex justify-between px-2.5">
      <div className=" md:w-[523px] text-center md:text-left md:mt-[183px]">
        <img
          className="md:ml-[-52px] mx-auto"
          src="assets/icons/facebook.svg"
          alt="facebook"
        />
        <p className=" font-inter font-normal md:text-[28px] mt-[-20px] leading-8">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="md:w-[473px] mt-[10px] md:mt-[141px]">
        <div className="w-full bg-white shadow-md  p-4">
          <input
            className="w-full py-[26px] px-4 border border-bordercolor rounded-md"
            type="text"
            name="email"
            placeholder="Email address"
          />
          <input
            className="w-full py-[26px] px-4 my-[15px] border border-bordercolor rounded-md"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            className="bg-[#1877F2] rounded-md py-6 text-center w-full font-inter font-semibold text-white "
            type="submit"
          >
            Log in
          </button>
          <Link
            to="/"
            className="text-[#1877F2] underline text-center block my-6 "
          >
            Forgotten password?
          </Link>
          <p className="w-full border  "></p>
          <div className="flex justify-center">
            <button
              className="bg-[#42B72A] py-6 px-11 rounded-md mt-6 font-inter font-semibold text-[16px] text-white"
              type="submit"
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
