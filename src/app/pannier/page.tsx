"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Buttons from "../components/Buttons";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Navigation from "../components/Navigation";
import Rendement from "../components/Rendement";
import Link from "next/link";

const Cart = () => {
  const {
    cart,
    totalCartPrice,
    removeItemFromCart,
    clearCart,
    addItemToCart,
    decrementItemInCart,
  } = useCart();
  const [open, setOpen] = useState<boolean>(false);

  const ToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row sm:flex-row gap-3 relative">
      <div className="flex-3">
        <Navigation />
      </div>

      {/**partie de  */}
      <div className="flex-1 pt-4">
        <h2 className="text-xl font-bold font-serif flex justify-center gap-2 text-blue-600">
          <ShoppingCart />
          <span>Mon panier</span>
        </h2>
        {cart.length === 0 ? (
          <div
            className="border shadow-lg text-center p-4 rounded-lg items-center 
          flex flex-col justify-center gap-4"
          >
            <span className="text-xl font-mono">votre panier est vide</span>
            <Link href="/#products">
              <Buttons label="shopping now" />
            </Link>
          </div>
        ) : (
          <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-3 ">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex  justify-between items-center my-2 bg-slate-100 p-3 shadow-md rounded-md"
                >
                  <span className="flex-2">
                    {" "}
                    <Image src={item.imgs} width={200} height={100} alt="" />
                  </span>
                  <span className="flex flex-col gap-3 flex-1 text-xl">
                    <small> {item.name}</small>
                    <small className="text-xl flex gap-6">
                      <small className="flex gap-2">
                        <aside
                          className="text-white cursor-pointer w-6 px-1 flex
                         justify-center text-xl h-8 bg-blue-900 "
                          onClick={() => decrementItemInCart(item.id)}
                        >
                          -
                        </aside>
                        <aside>{item.quantity}</aside>
                        <aside
                          className="text-white cursor-pointer w-6 h-8
                         px-1 text-xl flex justify-center bg-blue-900 "
                          onClick={() =>
                            addItemToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              quantity: 1,
                              imgs: item.imgs,
                            })
                          }
                        >
                          +
                        </aside>
                      </small>
                      <small>x {item.price} fcfa</small>
                    </small>
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-red-500 bg-white text-md p-1 rounded-md hover:bg-gray-100"
                    >
                      Supprimer
                    </button>
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <section className="flex gap-3 justify-between ">
                <span className="font-mono text-2xl border rounded-sm p-1 bg-slate-200   flex flex-col justify-center">
                  {" "}
                  Total HT:{totalCartPrice} Fcfa
                </span>
                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white p-2 md:w-1/6 rounded mt-4 hover:bg-red-400"
                >
                  vider le pannier
                </button>
              </section>
              <div className="">
                <aside>
                  <Buttons label="commander" onClick={ToggleOpen} />
                </aside>
                {open ? (
                  <aside className="absolute top-4  items-center">
                    {" "}
                    <Rendement />
                  </aside>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
