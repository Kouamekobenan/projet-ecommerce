import { ArrowLeft } from "lucide-react";
import React from "react";
const ButtonsReturn = ({ label }: { label: string }) => {
  return (
    <div className="">
      <button className="px-2 flex p-2 bg-blue-600 rounded-md hover:bg-blue-500 gap-2 font-mono font-bold">
        <span className="flex flex-col justify-center text-white">{label}</span>
        <span className="flex flex-col justify-center">
          {" "}
          <ArrowLeft className="text-white" />
        </span>
      </button>
    </div>
  );
};

export default ButtonsReturn;
