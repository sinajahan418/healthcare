"use client";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { MdOutlineMailLock } from "react-icons/md";
import SubmitButton from "../ui/SubmitButton";

const PatientForm = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <form className="p-2">
      <section className=" text-white   gap-4">
        <h1 className=" font-bold mt-[-20px] text-2xl mb-4">Hi there 👋</h1>
        <p className=" text-slate-400">Get started with appointments.</p>
      </section>
      <div className=" mt-6">
        <label className=" font-medium text-gray-500">Full name</label>
        <div className=" border-gray-500 border-2 rounded-md p-1 mt-2 flex items-center justify-around w-[50%]">
          <CiUser className=" text-white text-xl" />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" text-green-500 "
            placeholder="username"
            type="text"
          />
        </div>
      </div>
      <div className=" mt-6">
        <label className=" font-medium text-gray-500">email</label>
        <div className=" border-gray-500 border-2 rounded-md p-1 mt-2 flex items-center justify-around w-[50%]">
          <MdOutlineMailLock className=" text-white text-xl" />
          <input
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
            className=" text-green-500 "
            placeholder="email"
            type="email"
          />
        </div>
      </div>
      <div className=" mt-6">
        <label className=" font-medium text-gray-500">phone</label>
        <div className=" border-gray-500 border-2 rounded-md p-1 mt-2 flex items-center justify-around w-[50%]">
          <PhoneInput
            className=" gap-4 text-green-500 "
            value={phone as E164Number | undefined}
            onChange={setPhone}
            international
            placeholder="Enter phone number"
            defaultCountry="IR"
          />
        </div>
      </div>
      <SubmitButton email={email} name={name} phone={phone} className=" w-full" isLoading={isLoading}>
        get started
      </SubmitButton>
    </form>
  );
};

export default PatientForm;
