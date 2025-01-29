import React from "react";
import Buttons from "./Buttons";
import { Percent } from "lucide-react";
import im1 from "../image/m8.png";
import Image from "next/image";
import Link from "next/link";

const Pub = () => {
  return (
    <div className="m-2 p-2 md:m-6 flex flex-col md:flex-row justify-around bg-red-100">
      <div className="flex flex-col gap-3 justify-center ">
        <span className="flex gap-1 ">
          <Percent className="bg-red-400 rounded-full text-white p-1 " />
          <h1 className="text-red-400">Weekend bonus</h1>
        </span>
        <span className="text-2xl font-bold ">
          UP TO 40 off on digital items
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          possimus <br />
          dicta aliquid, minima ipsa iusto expedita consequatur molestiae
          accusantium
        </span>
        <Link href="../#products">
          <span>
            <Buttons label="Shop Now" />
          </span>
        </Link>
      </div>
      <div className="">
        <Image src={im1} width={500} height={200} alt="" className="" />
      </div>
    </div>
  );
};

export default Pub;
