import React from "react";
import Buttons from "../components/Buttons";
import Image from "next/image";
import im1 from "../image/t1.jpg";
import im2 from "../image/m1 (1).png";
import im3 from "../image/m1 (3).png";
import im4 from "../image/m4.png";
import im5 from "../image/m6.png";
import { Star } from "lucide-react";
import Link from "next/link";

const NewProduct = () => {
  const datas = [
    {
      id: 1,
      imgs: im1,
      title: "un telephone de 256G 4ram",
      price: 12500,
    },
    {
      id: 2,
      imgs: im2,
      title: "un telephone de 256G 4ram",
      price: 12500,
    },
    {
      id: 3,
      imgs: im3,
      title: "un telephone de 256G 4ram",
      price: 12500,
    },
    {
      id: 4,
      imgs: im4,
      title: "un telephone de 256G 4ram",
      price: 12500,
    },
    {
      id: 5,
      imgs: im5,
      title: "un telephone de 256G 4ram",
      price: 12500,
    },
  ];
  return (
    <div className="md:p-6 p-2">
      <div className="flex gap-3 flex-col md:flex-row justify-around">
        <section className="text-2xl font-mono font-bold">New arrivals</section>
        <section>
          <Buttons label="views alls products" />
        </section>
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex-2 flex flex-col justify-center gap-4 ">
          <span className="text-xl md:text-2xl font-bold font-mono">
            Sammsung Galasy ultra 5G
          </span>
          <span className="">
            <Link href='../#products'>
              <Buttons label="shop now"  />
            </Link> 
          </span>
          <span className="">
            <Image src={im1} width={600} height={300} alt="mon image" />
          </span>
        </div>
        <div className="flex-1 flex-col  gap-7  mt-3 p-4 border-2 rounded-md">
          {datas.map((datas, i) => (
            <div className="flex gap-10 border-b-2 pt-3" key={i}>
              <div className="">
                {" "}
                <Image src={datas.imgs} width={100} height={50} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <span>{datas.title}</span>
                <span className="flex">
                  <Star fill="#ff000" color="none"/>
                  <Star fill="#ff000" color="none" />
                  <Star fill="#ff000" color="none" />
                  <Star fill="#ff000" color="none" />
                  <Star fill="#ff000" color="none" />
                </span>
                <span className="font-bold">{datas.price} FCFA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
