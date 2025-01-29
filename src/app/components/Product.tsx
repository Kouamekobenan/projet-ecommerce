"use client";
import React, { useState } from "react";
import Buttons from "./Buttons";
import Image, { StaticImageData } from "next/image";
import { Eye, Heart, Plus, Star } from "lucide-react";
import Link from "next/link";
import { Data } from "../data/data";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  imgs: StaticImageData;
  desc: string;
  price: number;
}

const Product = () => {
  const data = Data;
  const productList = data;
  const [visibleCount, setVisibleCount] = useState(5);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const [activeIcons, setActiveIcons] = useState({});

  const toggleIcon = (id: number) => {
    setActiveIcons((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Inverse l'état de l'icône pour cet ID
    }));
  };

  const handleShowAll = () => {
    setVisibleCount(productList.length);
  };

  const { addItemToCart, addFavorite } = useCart();

  return (
    <div id="products" className="p-3 md:p-6">
      <div className="flex flex-col sm:flex-col gap-3 md:flex-row justify-between items-center">
        <span className="font-serif font-bold text-xl">Featured products</span>
        {visibleCount < productList.length && (
          <span onClick={handleShowAll}>
            <Buttons label="View all products" />
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-1 md:p-4 ">
        {productList.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="shadow-md">
            <div className="relative bg-blue-100 rounded-t-md p-2">
              <span className="flex justify-end relative">
                <button
                  onClick={() => toggleIcon(product.id)}
                  aria-label="Toggle Like"
                >
                  <Heart
                    className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110
                     flex bg-white rounded-full p-1 hover:bg-blue-200 "
                    onMouseEnter={() => setHoveredProductId(product.id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                    size={48}
                    color={activeIcons[product.id] ? "#ff0000" : "#000000"}
                    fill={activeIcons[product.id] ? "#ff0000" : "none"}
                    onClick={() =>
                      addFavorite({
                        id: product.id,
                        name: product.desc,
                        price: product.price,
                        imgs: product.imgs,
                      })
                    }
                  />
                </button>
                {hoveredProductId === product.id && (
                  <div
                    className="absolute top-[-30px] right-0 bg-black text-white 
                  text-sm rounded-md p-1"
                  >
                    Ajouter à vos favoris
                  </div>
                )}
              </span>

              <Link href={`../product/${product.id}`} className="relative">
                <Image
                  src={product.imgs}
                  width={200}
                  height={100}
                  alt={product.desc}
                  className="hover:scale-125 duration-500"
                />
                <span
                  className="absolute top-0 w-full h-full text-center opacity-0 text-2xl
                 hover:opacity-100 text-blue-800 items-center flex justify-center 
                   hover:duration-700 gap-2"
                >
                  <span>Voir</span>
                  <Plus className="text-[10em] bg-blue-900 text-white" />
                </span>
              </Link>

              <section className="flex bg-blue-100 duration-500  w-full h-full gap-2 text-center justify-between">
                <Link href={``}>
                  <Eye className="cursor-pointer flex flex-col justify-center" />
                </Link>
                <Buttons
                  onClick={() =>
                    addItemToCart({
                      id: product.id,
                      name: product.desc,
                      price: product.price,
                      quantity: 1,
                      imgs: product.imgs,
                    })
                  }
                  label="Add to cart"
                />
              </section>
            </div>
            <div className="bg-white p-2">
              <aside>{product.desc}</aside>
              <aside className="flex gap-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star key={index} fill="#fff000" color="#fff000 none " />
                  ))}
              </aside>
              <aside className="font-bold md:text-xl">
                {product.price} fcfa
              </aside>

              <Link href={`../categrory/${product.category}`}>
                <aside className="bg-slate-100 text-center w-1/2 rounded-sm hover:bg-slate-200 p-1">
                  {product.category}
                </aside>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
