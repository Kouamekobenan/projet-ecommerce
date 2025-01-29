import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import imgs from "../image/img_banniere.png";
import Buttons from "./Buttons";
import Link from "next/link";

const Banniere = () => {
  return (
    <div
      className="header p-2 md:p-6 flex flex-col md:flex-row justify-evenly
     bg-red-50 bg-gradient-to-r from-red-50 via-red-100 to-pink-100"
    >
      {/* Image en premier sur mobile */}
      <div className="order-1 md:order-2  bg-slate-100 rounded-s-full border-s-8 bg-red-200  border-s-blue-500">
        <Image
          src={imgs}
          width={500}
          height={200}
          alt="Bannière"
          className="image "
        />
      </div>
      {/* Texte */}
      <div className="flex flex-col items-center justify-center gap-10 order-2 md:order-1">
        <span className="flex flex-col gap-5">
          <small className="flex gap-2">
            <Star className="bg-red-400 rounded-full p-1 text-white" />
            <span className="font-serif text-xl text-red-400 flex flex-col justify-center items-center">
              Top product of month
            </span>
          </small>
          <span className="text-2xl font-mono font-bold text-white">
            MICROPACK MHP
            <br />
            Headphone BLACK
          </span>
          <span>
            The micropack Headphone offers stereo PC headset with <br />
            volume control, a flexible mic arm, and adjustable headband.
          </span>
          <Link href="#products" className="">
            {" "}
            <Buttons label="Shopping now" />{" "}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banniere;
