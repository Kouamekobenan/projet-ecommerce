import React from "react";
import Link from "next/link";
import {
  Contact,
  Home,
  ListOrderedIcon,
  LucideIcon,
  ProjectorIcon,
} from "lucide-react";

interface typeLinks {
  id: number;
  lient: string;
  label: string;
  icon: LucideIcon;
}
const Navigations = () => {
  const links: typeLinks[] = [
    { id: 1, lient: "/dashbord", label: "Dashbord", icon: Home },
    {
      id: 1,
      lient: "/products/products",
      label: "produits",
      icon: ProjectorIcon,
    },
    { id: 1, lient: "/products/client", label: "Clients", icon: Contact },
    {
      id: 1,
      lient: "/products/commandes",
      label: "Commandes",
      icon: ListOrderedIcon,
    },
  ];
  return (
    <div className="navigation h-[600px] w-[270px] bg-slate-800 p-4">
      <h1 className="font-bold text-blue-600 border-b text-2xl">
        Dashbord admin
      </h1>
      <nav className="pt-5">
        {links.map((l, i) => (
          <Link
            className="flex flex-col gap-10 text-xl text-white pb-3 hover:text-blue-400"
            key={i}
            href={l.lient}
          >
            <span className="flex gap-2">
              <small>
                <l.icon />
              </small>
              <small>{l.label}</small>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigations;
