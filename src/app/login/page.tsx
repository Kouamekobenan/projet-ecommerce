import Image from "next/image";
import React from "react";
import f1 from "../image/F1.png";
import Buttons from "../components/Buttons";
import Link from "next/link";

const page = () => {
  return (
    <div className="registere grid grid-cols-1 md:grid-cols-2 p-6">
      <div className="blog bg-blue-300 p-4 flex flex-col gap-4">
        <div className="flex justify-center">
          <span className="text-blue-600 rounded-md text-2xl font-serif bg-white p-2 uppercase">
            Login
          </span>
        </div>
        {/**part formulaire */}
        <div className="form ">
          <form action="" className="flex flex-col gap-4">
            <input
              type="mail "
              placeholder="votre email"
              className="h-10 rounded-md pl-3"
            />
            <input
              type="password"
              placeholder="enter your password "
              className="h-10 rounded-md pl-3"
            />
            <Buttons label="Valider" />
          </form>
          {/** part icon*/}
        </div>
        <div className="flex gap-2">
          <span className="flex flex-col justify-center">
            Avez-vous un compte ? si non:
          </span>
          <Link href="../registere">
            <button className="bg-blue-100 rounded-md p-2 hover:bg-blue-200">
              Créer un compte
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <Image src={f1} width={400} height={200} alt="" />
      </div>
    </div>
  );
};

export default page;
