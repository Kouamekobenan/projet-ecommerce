import { Bell, Contact, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="sm:h-[600px] md:h-[600px] bg-slate-800 p-4">
      <div className="My-cart flex gap-3 text-blue-600 text-2xl font-bold font-serif border-b pb-3">
        <Link
          href="/"
          className="flex gap-3 text-blue-600 text-2xl font-bold font-serif"
        >
          <Home className="text-white" />
          <span>Accueil</span>
        </Link>
      </div>
      <div className="flex md:flex-col justify-between gap-3 pt-8">
        <section className=" pb-4">
          <Link href="../pannier" className="flex gap-2">
            <ShoppingCart className="text-white" />
            <span className="text-blue-200 md:font-bold font-serif sm:text-xl md:text-xl ">
              Mon pannier
            </span>
          </Link>
        </section>
        <section className="md:pt-4">
          <Link href="../favorite" className="flex gap-2">
            <Bell className="text-white" />
            <span className="text-blue-200 md:font-bold font-serif sm:text-xl md:text-xl">
              Mes favoris
            </span>
          </Link>
        </section>
      </div>
      <div className="flex flex-col gap-4  pt-6">
        <Link href="">
          {" "}
          <span className="font-serif text-white text-md italic flex gap-2">
            <Contact />
            <span>Contact Us</span>
          </span>
        </Link>
        <span className="font-serif text-white text-md italic pl-8 flex flex-col gap-2">
          <span>tel: +22507076956</span>
          <span>whatSapp: +22505056678</span>
        </span>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Navigation;
