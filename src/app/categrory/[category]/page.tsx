import React from "react";
import { Data } from "@/app/data/data";
import Categories from "@/app/components/categorie/Categories";
import Link from "next/link";
import ButtonsReturn from "@/app/components/ButtonsReturn";

const page = ({ params }: { params: { category: string } }) => {

  const products = Data.filter((data) => data.category === params.category);
  const totalCategory = products.reduce((prod)  => prod + (1),0)

  if (!products) {
    return (
      <div className=" flex items-center bg-slate-700 text-white p-6">
        <h1 className="font-serif text-2xl font-bold italic">
          Ce type de categorie ne pas disponible
        </h1>
      </div>
    );
  }
  return (
    <div className="p-7">
      <div className="font-bold text-2xl font-serif">
        <span>Il y a: <small className="text-blue-600">{totalCategory}</small></span>
        <span> <small className="text-blue-600">{params.category}</small>  en stock</span> 
      </div>
      <div className="">  </div>
        
      <div className="grid grid-col-1 sm:grid-cols-2  md:grid-cols-3 gap-4 border rounded-sm p-2 ">
        {products.map((product) => (
          <Categories
            key={product.id}
            id={product.id}
            imgs={product.imgs}
            desc={product.desc}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
      <Link href="/" className="pt-4">
        <ButtonsReturn label="Retour a l'accueil" />
      </Link>
    </div>
  );
};

export default page;
