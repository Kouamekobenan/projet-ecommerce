import React from "react";
import { Data } from "@/app/data/data";
import DetailPage from "../../components/detail/DetailProduct";

const page = ({ params }: { params: { id: string } }) => {
  const product = Data.find((data) => data.id === parseInt(params.id));
  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-serif font-bold">Detail du produit</h1>
      <DetailPage
        imgs={product.imgs}
        desc={product.desc}
        price={product.price}
        id={product.id}
      />
    </div>
  );
};

export default page;
