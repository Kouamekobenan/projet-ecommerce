"use client";
import Image, { StaticImageData } from "next/image";
import Buttons from "../Buttons";
import Link from "next/link";
import ButtonsReturn from "../ButtonsReturn";
import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";

interface productItem {
  id: number;
  imgs: StaticImageData;
  desc: string;
  price: number;
}

const page: React.FC<productItem> = ({ id, imgs, desc, price }) => {
  const { addItemToCart } = useCart();

  return (
    <div className="productDetails md:w-1/2 ">
      <div className="flex flex-col md:flex-row justify-center gap-4 border rounded-sm p-2">
        <div className="">
          <Image src={imgs} height={600} width={300} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <span className="font-serif text-xl">{desc}</span>
          <span className="border rounded-sm px-2 text-2xl font-bold">
            {price} F
          </span>
          <span className="flex gap-1">
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
            <Star className="text-orange-400" />
          </span>

          <Buttons
            label="add cart"
            onClick={() =>
              addItemToCart({
                id: id,
                name: desc,
                price: price,
                quantity: 1,
                imgs: imgs,
              })
            }
          />
        </div>
      </div>
      <Link href="/" className="p-4">
        <ButtonsReturn label="Retour a la page accueil" />
      </Link>
    </div>
  );
};

export default page;
