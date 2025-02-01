import React from "react";
import Image, { StaticImageData } from "next/image";

interface productItem {
  id: number;
  imgs: StaticImageData;
  desc: string;
  price: number;
  category: string;
}

const Categories: React.FC<productItem> = ({ imgs, desc, price, category }) => {
  
  return (
    <div className="category border bg-slate-50 rounded-lg hover:shadow-lg hover:duration-500">
      <div className="">
      </div>
      <div className="">
        <div className="flex justify-center items-center text-center ">
          <Image src={imgs} width={300} height={200} alt="" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <span>{desc}</span>
          <span className="font-bold font-mono text-xl"> {price} fcfa</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
