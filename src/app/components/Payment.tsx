import Image from "next/image";
import React from "react";
import s1 from "../image/s1.png";
import s2 from "../image/s2.png";
import s from "../image/s.png";
const Payment = () => {
  return (
    <div className="bg-red-50 flex flex-col sm:flex-row justify-evenly md:flex-row p-3 md:p-6 gap-4">
      <div className="flex flex-col gap-4 items-center bg-white text-black p-3 rounded-md shadow-sm">
        <span className="flex flex-col gap-3 text-center">
          <span className="flex items-center text-center justify-center">
            <Image src={s} width={150} height={100} alt="" />
          </span>

          <span className="font-bold text-black font-serif text-xl text-center">
            free shipping
          </span>
          <span className="text-center">
            Our free shipping policy appiles to all orders regarders <br /> of
            order value of destinaton{" "}
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center bg-white text-black p-3 rounded-md shadow-sm">
        <span className="flex flex-col gap-3">
          <span className="text-center flex justify-center items-center">
            <Image src={s1} width={150} height={100} alt="" />
          </span>
          <span className="text-center font-bold font-serif text-xl ">
            Scure payments
          </span>
          <span className="text-center">
            Our free shipping policy appiles to all orders regarders <br /> of
            order value of destinaton{" "}
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center bg-white text-black p-3 rounded-md shadow-sm">
        <span className="flex flex-col gap-3">
          <span className="text-center flex justify-center items-center">
            <Image src={s2} width={150} height={100} alt="" />
          </span>
          <span className="font-bold font-serif text-xl text-center">
            Support Online 24/24
          </span>
          <span className="text-center">
            Our free shipping policy appiles to all orders regarders <br /> of
            order value of destinaton{" "}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Payment;
