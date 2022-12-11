import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { money } from "../assets";
import { CustomButton, FormField } from "../components/index";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });
  const handleSubmit = () => {};
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {loading && "loading ..."}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[300px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[15px] text-[13px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            value={form.name}
            inputType="text"
            handleChange={() => {}}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={() => {}}
          />
        </div>
        <FormField
          labelName="Story *"
          placeholder="write a story"
          value={form.description}
          isTextArea
          inputType="text"
          handleChange={() => {}}
        />
        <div className="w-full flex justify-start lg:justify-center items-center p-4 bg-[#8c6dfd] h-[100px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[30px] h-[30px] object-contain"
          />
          <h4 className="font-epilogue font-bold text-[20px] text-white ml-[20px]">
            You will get 10% of the raised amount{" "}
          </h4>
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="Amount(eth)"
            value={form.target}
            inputType="number"
            handleChange={() => {}}
          />
          <FormField
            labelName="End date *"
            placeholder="End Date"
            inputType="date"
            value={form.title}
            handleChange={() => {}}
          />
        </div>
        <div>
          <CustomButton
          btnType='button'
          title='Submit new Campaign' 
          styles='bg-[#1dc071]'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
