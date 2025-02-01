"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { product } from "../types/typages";
import im1 from "../image/img_banniere.png";
import im2 from "../image/m1 (1).png";
import im3 from "../image/m1 (2).png";
import im4 from "../image/m1 (3).png";
import im5 from "../image/m4.png";
import Image from "next/image";

const Category = () => {
  const datas: product[] = [
    { id: 1, imgs: im1, title: "ecouteurs" },
    { id: 2, imgs: im2, title: "Montre" },
    { id: 3, imgs: im3, title: "video ecouteur" },
    { id: 4, imgs: im4, title: "camera" },
    { id: 5, imgs: im5, title: "laptop" },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(datas.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = datas.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div id="category" className="p-2 md:p-6">
      <div className="flex justify-between items-center">
        <section className="text-2xl font-serif">Browse by category</section>
        <section className="flex gap-2">
          <span
            className="bg-blue-600 cursor-pointer text-white flex justify-center items-center hover:bg-slate-100 hover:text-black duration-500 p-2 rounded"
            onClick={handlePrevious}
          >
            <ChevronLeft />
          </span>
          <span
            className="bg-blue-600 text-white cursor-pointer flex justify-center items-center hover:bg-slate-100 hover:text-black duration-500 p-2 rounded"
            onClick={handleNext}
          >
            <ChevronRight />
          </span>
        </section>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-1 gap-4 items-center ">
        {visibleItems.map((d) => (
          <div
            className=" p-2 rounded-md hover:shadow-md duration-500 flex gap-2 shadow-md"
            key={d.id}
          >
            <section>
              <Image src={d.imgs} width={150} height={150} alt={d.title} className="bg-blue-200"/>
            </section>
            <section className="text-center text-xl mt-2 font-medium flex flex-col gap-1 
            justify-center font-serif">
             <span>{d.title}</span> 
             <span className="italic text-gray-500 text-sm">40 product</span>

            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
