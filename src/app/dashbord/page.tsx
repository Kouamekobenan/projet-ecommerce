import React from "react";
import Navigations from "../components/dashbord_comp/Navigations";
import { Barchat } from "../components/Barchat";

const page = () => {
  return (
    <div className="dashbord flex  gap-4">
      <div className="">
        <Navigations />
      </div>
      <div className="blog_dashbord pt-5">
        <div className="">
          <div className="title">
            <h1 className="font-bold text-2xl font-serif">
              Bienvenu sur le dashbord administrateur
            </h1>
            <div className="grid grid-cols-4 gap-6 mt-6">
              <div className="p-4 bg-blue-500 text-white rounded flex flex-col gap-2">
                <span className="border-b">Total Ventes</span>
                <span>2000456 Fcfa</span>
              </div>
              <div className="p-4 bg-green-500 text-white rounded flex flex-col gap-2">
                <span className="border-b"> Total Produits</span>
                <span>1002</span>
              </div>
              <div className="p-4 bg-yellow-500 text-white rounded flex flex-col gap-2">
                <span className="border-b ">Total Clients</span>
                <span>101</span>
              </div>
              <div className="p-4 bg-red-500 text-white rounded flex flex-col gap-2">
                <span className="border-b"> Commandes</span>
                <span>20</span>
              </div>
            </div>
          </div>
          <div className="">
        <Barchat/>
      </div>
        </div>
      </div>
     
    </div>
  );
};

export default page;
