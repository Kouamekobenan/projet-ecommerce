"use client";

import { useCart } from "@/context/CartContext";
import { Search, ShoppingCart, User, Menu, Heater, Heart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Hmessage from "./Hmessage";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const ToggleOpen = () => {
    setOpen((prev) => !prev);
  };
  const [mouse, setMouse] = useState<boolean>(false);

  const { cartCount, favoriteCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-10">
        {/* Logo */}
        <div className="flex gap-1 font-serif text-2xl font-bold text-blue-600">
          <span>
            <Heater />
          </span>
          <span>ELECTRO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-serif">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#category" className="hover:text-blue-600 transition">
            Category
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            About Us
          </a>
          <a href="../totalProduct" className="hover:text-blue-600 transition">
            Produits
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Blog
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full pl-4 pr-10 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-2 text-gray-500" size={20} />
          </div>

          {/* Shopping Cart with Count */}
          <div className="relative">
            <button
              aria-label="Cart"
              className="text-gray-600 hover:text-blue-600"
            >
              <aside className="relative">
                <Link
                  href="../pannier"
                  onMouseEnter={() => setMouse(true)}
                  onMouseLeave={() => setMouse(false)}
                >
                  <ShoppingCart size={24} />
                </Link>
                {mouse && (
                  <span className="absolute top-6 left-0 ">
                    <Hmessage title="Panier" message="voir ton panier" />
                  </span>
                )}
              </aside>
            </button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          {/** Favorite */}
          <div className="relative">
            <Link href="../favorite">
              {" "}
              <Heart />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {favoriteCount}
            </span>
          </div>

          {/* User */}
          <div className="relative">
            <button
              onClick={ToggleOpen}
              aria-label="User"
              className="text-gray-600 hover:text-blue-600"
            >
              <User size={24} />
            </button>
            {open && (
              <span className="absolute top-6  right-0 border bg-slate-100 p-1 rounded-md shadow-md">
                <Link href="../login">
                  <button className="cursor-pointer border-spacing-2 border-b hover:text-blue-400">
                    connecté
                  </button>
                </Link>

                <button className="cursor-pointer border-b hover:text-blue-400">
                  deconnecté
                </button>
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100">
          <ul className="flex flex-col gap-4 p-4 text-gray-700">
            <li>
              <a href="/" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Produits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Blog
              </a>
            </li>
            <li>
              <a
                href="../totalProduct"
                className="hover:text-blue-600 transition"
              ></a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
