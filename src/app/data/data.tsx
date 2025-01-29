import { StaticImageData } from "next/image";
import im1 from "../image/m4.png";
import im2 from "../image/img_banniere.png";
import im3 from "../image/m1 (1).png";
import im4 from "../image/m1 (2).png";
import im5 from "../image/m1 (3).png";
import im6 from "../image/m5.jpg";
import im7 from "../image/m6.png";
import im8 from "../image/m7.png";
import im9 from "../image/m8.png";
import im10 from "../image/m1 (3).png";

interface listprod {
  id: number;
  imgs: StaticImageData;
  desc: string;
  price: number;
  category: string;
}

export const Data: listprod[] = [
  {
    id: 1,
    imgs: im1,
    desc: "Ordinateur portable",
    price: 23456,
    category: "ordinateur",
  },
  { id: 2, imgs: im2, desc: "Casque pro", price: 23456, category: "ecouteur" },
  {
    id: 3,
    imgs: im3,
    desc: "Montre rolex pro",
    price: 23456,
    category: "montre",
  },
  {
    id: 4,
    imgs: im4,
    desc: "Mannette de jeux",
    price: 23456,
    category: "Mannette",
  },
  {
    id: 5,
    imgs: im5,
    desc: "Camera appareil",
    price: 23456,
    category: "camera",
  },
  {
    id: 6,
    imgs: im6,
    desc: "Souris d'ordinateur",
    price: 23456,
    category: "souris",
  },
  {
    id: 7,
    imgs: im7,
    desc: "Calcutrice chap",
    price: 23456,
    category: "calculatrice",
  },
  {
    id: 8,
    imgs: im8,
    desc: "Fer à repasser electrique",
    price: 23456,
    category: "repassage",
  },
  { id: 9, imgs: im9, desc: "Casque Rmax", price: 23456, category: "ecouteur" },
  {
    id: 10,
    imgs: im10,
    desc: "Camera appareil",
    price: 23456,
    category: "camera",
  },
];
