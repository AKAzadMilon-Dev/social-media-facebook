import React, { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorSurName, setErrorSurName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [closs, setCloss] = useState(false);
  const [date, setDate] = useState(new Date().getDate());
  const [bDate, setBdate] = useState("");
  const [bDateError, setBdateError] = useState("");
  const [month, setMonth] = useState(new Date().getMonth());
  const [bMonth, setBmonth] = useState("");
  const [bMonthError, setBmonthError] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [bYear, setByear] = useState("");
  const [bYearError, setByearError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setErrorFirstName("");
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
    setErrorSurName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = () => {
    if (!firstName) {
      setErrorFirstName("First name is requird!");
    } else {
      if (firstName.length < 3) {
        setErrorFirstName("Full Name must be 3 character!");
      }
    }

    if (!surname) {
      setErrorSurName("Surname is requird!");
    } else {
      if (surname.length < 4) {
        setErrorSurName("Surname must be 4 character!");
      }
    }

    if (!email) {
      setErrorEmail("Email is required!");
    } else {
      if (
        !email
          .toLowerCase()
          .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        setErrorEmail("Valid email is required!");
      }
    }

    if (!password) {
      setErrorPassword("Password is required");
    } else if (!password.match(/^(?=.*[a-z])/)) {
      setErrorPassword("Password must be at least 1 lowercase character");
    } else if (!password.match(/^(?=.*[A-Z])/)) {
      setErrorPassword("Password must be at least 1 uppercase character");
    } else if (!password.match(/^(?=.*[0-9])/)) {
      setErrorPassword("Password must be at least 1 numeric character");
    } else if (!password.match(/^(?=.*[!@#$%^&*])/)) {
      setErrorPassword("Password must be at least 1 special character");
    } else if (!password.match(/^(?=.{8,})/)) {
      setErrorPassword("Password must be at least 8 character");
    }

    if (!bDate) {
      setBdateError("Please choose date!");
    } else if (!bMonth) {
      setBdateError("Please choose a month!");
    } else if (!bYear) {
      setBdateError("Please choose a year!");
    } else if (bYear) {
      if (new Date().getFullYear() - bYear < 18) {
        setBdateError("Your age must be greater then or equal to 18!");
      } else {
        setBdateError("");
      }
    }

    if (!gender) {
      setGenderError("Please choose a gender!");
    }
  };

  const years = Array.from(new Array(70), (val, index) => year - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const dates = Array.from(
    new Array(new Date(bYear, bMonth, 0).getDate()),
    (val, index) => 1 + index
  );
  console.log(dates);

  const handleYear = (e) => {
    setByear(e.target.value);
  };

  const handleMonth = (e) => {
    setBmonth(e.target.value);
  };

  const handleDate = (e) => {
    setBdate(e.target.value);
  };

  const handleGender = (gender) => {
    setGender(gender);
    setGenderError("");
  };

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
          <div>
            <input
              onChange={handleFirstName}
              className=" w-[242px] h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 outline-none"
              type="text"
              name="firstname"
              placeholder="First Name"
            />
            {errorFirstName && (
              <p className="text-rose-500 font-inter font-medium text-base pt-3">
                {errorFirstName}
              </p>
            )}
          </div>
          <div>
            <input
              onChange={handleSurname}
              className=" w-[242px] h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 outline-none"
              type="text"
              name="surname"
              placeholder="Surname"
            />
            {errorSurName && (
              <p className="text-rose-500 font-inter font-medium text-base pt-3">
                {errorSurName}
              </p>
            )}
          </div>
        </div>
        <div>
          <div>
            <input
              onChange={handleEmail}
              className=" w-full h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 mt-3.5 outline-none"
              type="text"
              name="email"
              placeholder="Mobile number or email address"
            />
            {errorEmail && (
              <p className="text-rose-500 font-inter font-medium text-base pt-3">
                {errorEmail}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              onChange={handlePassword}
              className=" w-full h-[51px] font-inter font-medium text-lg text-[#989A9E] border border-[#D8DBDF] rounded-md px-5 mt-3.5 outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="New password"
            />
            {errorPassword && (
              <p className="text-rose-500 font-inter font-medium text-base pt-3">
                {errorPassword}
              </p>
            )}
            {showPassword ? (
              <RiEyeFill
                onClick={handleShowPassword}
                className="absolute top-8 right-3.5 cursor-pointer text-[#848484]"
              />
            ) : (
              <RiEyeCloseFill
                onClick={handleShowPassword}
                className="absolute top-8 right-3.5 cursor-pointer text-[#848484]"
              />
            )}
          </div>
        </div>
        <div className="relative">
          <p className=" font-inter font-normal text-lg text-[#606770] mt-4">
            Date of birth{" "}
            <BsQuestionCircleFill className="absolute top-[6px] left-[114px] text-[#4F4F4F]" />
          </p>
          <div className="flex justify-between mt-1.5">
            <div className="relative">
              <select
                onChange={handleDate}
                className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md py-2.3 px-4 outline-none appearance-none "
              >
                <option>Day</option>
                {dates.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <FaAngleDown className="absolute top-[14px] left-[127px] text-lg text-[#4F4F4F] " />
            </div>

            <div className="relative">
              <select
                onChange={handleMonth}
                className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md px-4 outline-none appearance-none"
              >
                <option>Month</option>
                {months.map((item, index) => (
                  <option value={item} key={index}>
                    {item == 1 && "January"}
                    {item == 2 && "February"}
                    {item == 3 && "March"}
                    {item == 4 && "April"}
                    {item == 5 && "May"}
                    {item == 6 && "June"}
                    {item == 7 && "July"}
                    {item == 8 && "August"}
                    {item == 9 && "Septembar"}
                    {item == 10 && "Octobar"}
                    {item == 11 && "Novembar"}
                    {item == 12 && "Decembar"}
                  </option>
                ))}
              </select>
              <FaAngleDown className="absolute top-[14px] left-[127px] text-lg text-[#4F4F4F] " />
            </div>

            <div className="relative">
              <select
                onChange={handleYear}
                className=" w-[155px] h-[45px] font-inter font-medium text-lg text-[#4F4F4F] border border-[#D8DBDF] rounded-md px-4 outline-none appearance-none"
              >
                <option>Year</option>
                {years.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <FaAngleDown className="absolute top-[14px] left-[127px] text-lg text-[#4F4F4F] " />
            </div>
          </div>
        </div>
        {bDateError && (
          <p className=" text-rose-500 font-inter font-medium text-base pt-3">
            {bDateError}
          </p>
        )}

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
                  name="gender"
                  onChange={() => handleGender("Male")}
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
                  name="gender"
                  onChange={() => handleGender("Female")}
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
                  className="absolute top-[16px] right-[14px]"
                  type="radio"
                  name="gender"
                  onChange={() => handleGender("Custom")}
                />
              </div>
            </label>
          </div>
          {genderError && (
            <p className=" text-rose-500 font-inter font-medium text-base pt-3">
              {genderError}
            </p>
          )}
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
          <button
            onClick={handleRegistration}
            className="w-[244px] h-[45px] font-inter font-semibold text-2xl text-white bg-[#00A400] rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
