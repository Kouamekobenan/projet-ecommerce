import React from "react";

interface typeMessage {
  title: string;
  message: string;
}
const Hmessage: React.FC<typeMessage> = ({ title, message }) => {
  return (
    <div className=" flex flex-col border p-3 rounded-xl shadow-2xl bg-slate-200 w-36">
      <span className="italc font-bold border-b border-red-400 pt-1">
        {title}
      </span>
      <span>{message}</span>
    </div>
  );
};

export default Hmessage;
