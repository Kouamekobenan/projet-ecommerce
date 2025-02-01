"use client";
import { useCart } from "@/context/CartContext";
import { Bell, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Link from "next/link";

const page = () => {
  const { favorites, removeFavorite } = useCart();
  return (
    <div className="flex flex-col md:flex-row sm:flex-row gap-3 relative">
      {/**partie de la navBar */}
      <div className="flex-3">
        <Navigation />
      </div>
      {/**parite blog */}
      <div className="flex-1 pt-4">
        <div className="flex gap-3 font-serif font-bold text-2xl items-center justify-center text-blue-600">
          <span>
            <Bell />
          </span>
          <h1 className="">Mes articles favoris</h1>
        </div>
        <div className="blog">
          {favorites.length === 0 ? (
            <div
              className="border shadow-lg text-center p-4 rounded-lg items-center 
          flex flex-col justify-center gap-4"
            >
              <span className="text-xl font-mono">vos avez aucun favoris</span>
              <Link href="/#products">
                <Buttons label="Voir article" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {favorites.map((pro, index) => (
                <div
                  className="flex  p-2 bg-blue-100 border rounded-lg"
                  key={index}
                >
                  <Image
                    src={pro.imgs}
                    width={300}
                    height={200}
                    alt={pro.name}
                    className=""
                  />
                  <div className="flex flex-col gap-2 justify-center ">
                    <span>{pro.name}</span>
                    <span>{pro.price} Fcfa</span>
                    <span className="flex gap-2">
                      <Star fill="#FFB347"  color="none" />
                      <Star  fill="#FFB347"  color="none" />
                      <Star  fill="#FFB347"  color="none" />
                      <Star  fill="#FFB347"  color="none" />
                      <Star  fill="#FFB347"  color="none" />
                    </span>
                    <button
                      onClick={() => removeFavorite(pro.id)}
                      className="bg-blue-600 rounded-lg hover:bg-blue-500  transition-shadow h-9 mt-5 text-2xl  duration-500"
                    >
                      supprimer{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
