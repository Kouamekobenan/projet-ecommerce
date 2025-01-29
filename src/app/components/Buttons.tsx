import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonsProps {
  label: string;
  onClick?: () => void;
  type?: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ label, onClick, type }) => {
  return (
    <div className="">
      <button
        onSubmit={type}
        onClick={onClick}
        className="px-2 flex p-2 bg-blue-600 transition-all
         rounded-md hover:bg-blue-500 gap-2 font-mono font-bold"
      >
        <span className="flex flex-col justify-center text-white">{label}</span>
        <span className="flex flex-col justify-center">
          {" "}
          <ArrowRight className="text-white" />
        </span>
      </button>
    </div>
  );
};

export default Buttons;
