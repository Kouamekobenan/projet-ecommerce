import React from "react";
import Buttons from "./Buttons";

const Joins = () => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-3 md:flex-row justify-around p-8 lg:py-32"
    >
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-bold font-serif">
          Join us & Get Updates
        </span>
        <span>Sign up for exclusive effers, latest news and updaters</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="enter your mail ..."
          className="border rounded-sm md:w-[500px] h-10 pl-2"
        />
        <Buttons label="Subscribe" />
      </div>
    </div>
  );
};

export default Joins;
