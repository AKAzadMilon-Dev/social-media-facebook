import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoMdRadioButtonOff } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const Registration = () => {
  return (
    <div className="flex justify-center ">
      <div className=" w-[545px] shadow-md p-5 relative ">
        <h1 className="font-inter font-bold text-4xl text-[#1C1E21] ">
          Sign Up
        </h1>
        <p className="font-inter font-normal text-lg text-[#606770] mt-4 ">
          It’s quick and easy.
        </p>
        <button className="text-black absolute top-6 right-6 text-2xl">
          <AiOutlineClose />
        </button>
        <p className=" w-full border-b border-solid mt-4"></p>
        <div className="mt-5 flex justify-between">
          <input
            className=" w-[242px] h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 outline-none"
            type="text"
            placeholder="First Name"
          />
          <input
            className=" w-[242px] h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 outline-none"
            type="text"
            placeholder="Surname"
          />
        </div>
        <div>
          <input
            className=" w-full h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 mt-3.5 outline-none"
            type="text"
            placeholder="Mobile number or email address"
          />
          <input
            className=" w-full h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 mt-3.5 outline-none"
            type="text"
            placeholder="New password"
          />
        </div>
        <div className="relative">
          <p className=" font-inter font-normal text-lg text-[#606770] mt-4">
            Date of birth{" "}
            <BsQuestionCircleFill className="absolute top-[6px] left-[114px] text-[#4F4F4F]" />
          </p>
          <div className="flex justify-between mt-1.5">
            <div className="relative">
              <select className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md py-2.3 px-4 outline-none appearance-none ">
                <option>0</option>
              </select>
              <FaAngleDown className="absolute top-[14px] left-[127px] text-lg text-[#4F4F4F] " />
            </div>

            <div className="relative">
              <select className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md px-4 outline-none appearance-none">
                <option>Oct</option>
              </select>
              <FaAngleDown className="absolute top-[14px] left-[127px] text-lg text-[#4F4F4F] " />
            </div>

            <div className="relative">
              <select className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md px-4 outline-none appearance-none">
                <option>2022</option>
              </select>
              <FaAngleDown className="absolute top-[14px] left-[127px] text-lg text-[#4F4F4F] " />
            </div>
          </div>
        </div>
        <div className="relative mt-5">
          <p className=" font-inter font-normal text-lg text-[#606770] mt-4">
            Gender{" "}
            <BsQuestionCircleFill className="absolute top-[6px] left-[68px] text-[#4F4F4F]" />
          </p>
          <div className="flex justify-between mt-1.5">
            <label>
              <div className="relative">
                <div className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md px-5 outline-none">
                  <p className="font-inter font-medium text-lg text-[#949494] mt-2">
                    Male
                  </p>
                </div>
                <input
                  className="absolute top-[16px] right-[14px]  "
                  type="radio"
                />
              </div>
            </label>
            <label>
              <div className="relative">
                <div className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md px-5 outline-none">
                  <p className="font-inter font-medium text-lg text-[#949494] mt-2">
                    Female
                  </p>
                </div>
                <input
                  className="absolute top-[16px] right-[14px]  "
                  type="radio"
                />
              </div>
            </label>
            <label>
              <div className="relative">
                <div className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md px-5 outline-none">
                  <p className="font-inter font-medium text-lg text-[#949494] mt-2">
                    Custom
                  </p>
                </div>
                <input
                  className="absolute top-[16px] right-[14px]  "
                  type="radio"
                />
              </div>
            </label>
          </div>
        </div>
        <p className="font-inter font-normal text-[13px] text-[#606770] mt-2">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more
        </p>
        <p className="font-inter font-normal text-[13px] text-[#606770] mt-2">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <div className="text-center mt-4">
          <button className="w-[244px] h-[45px] font-inter font-semibold text-2xl text-white bg-[#00A400] rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
