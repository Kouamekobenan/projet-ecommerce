"use client";
import Navigations from "@/app/components/dashbord_comp/Navigations";
//import React, { useState } from "react";
import { Data } from "@/app/data/data";
const page = () => {
  //const [data, setData] = useState(Data);
  const data = Data;
  return (
    <div className="products flex gap-2">
      <div className="">
        {" "}
        <Navigations />
      </div>
      <div className="pt-4">
        <div className="">
          <h1 className="font-bold text-2xl font-serif uppercase">
            Bienvenue sur la page des Produits
          </h1>
        </div>
        <div className="">
          <div className="flex justify-between bg-slate-800 text-white p-3">
            <span>index</span>
            <span>nom</span>
            <span>categorie</span>
            <span>prix</span>
          </div>
          {data.map((database, i) => (
            <div className=" bg-slate-400 pb-3 border-b pt-2" key={i}>
              <div className="flex justify-between px-3">
                <span className="flex justify-center text-center items-center">
                  {database.id}
                </span>
                <span>{database.desc}</span>
                <span>{database.category}</span>
                <span>{database.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
