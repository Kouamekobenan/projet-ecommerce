"use client";
import { useState } from "react";
import Buttons from "./Buttons";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const Rendement = () => {
  const [open, setOpen] = useState<boolean>(true);
  if (!open) return null;

  const notify = () => {
    toast.success("votre commande est validé avec succès", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="rendement duration-700 shadow-2xl rounded-lg bg-blue-100  p-4 flex flex-col gap-4">
      <div className="flex justify-end">
        <span
          className="bg-blue-400 
        text-white rounded-full p-1 px-2 hover:bg-blue-500 cursor-pointer
        "
          onClick={() => setOpen(false)}
        >
          <X />
        </span>
      </div>
      <div className="text-center">
        <h1 className="font-serif text-2xl font-bold italic">
          Remplir ce formulaire
        </h1>
      </div>
      <div className="">
        <form className="flex flex-col gap-4 font-serif">
          <input
            type="number"
            placeholder="entrer votre conctact"
            className="h-8 rounded-md pl-3"
          />
          <span className="flex gap-2">
            <small className="flex flex-col justify-center text-xl font-serif">
              Choisir une ville
            </small>
            <select name="" id="" className="h-8">
              <option value="">Bondoukou</option>
              <option value="">Abengourou</option>
              <option value="">Abidjan</option>
              <option value="">Adzopé</option>
            </select>
          </span>
          <span className="flex gap-2">
            <small className="flex flex-col justify-center text-xl">
              Mode de payment
            </small>
            <select name="" id="" className="h-8">
              <option value="">payer a la reception</option>
              <option value="">payer avant de commander</option>
            </select>
          </span>
          <input
            type="text"
            placeholder="votre quartier"
            className="h-8 rounded-md pl-3"
          />
        </form>
        <span className="p-3">
          <Buttons label="Finaliser" onClick={notify} />
        </span>
      </div>
    </div>
  );
};

export default Rendement;
