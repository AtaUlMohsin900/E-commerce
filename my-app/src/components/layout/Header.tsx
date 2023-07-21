import { ShoppingCart } from "lucide-react";
import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FaSistrix } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-6">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-32" />
      </Link>
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/kids"}>Kids</Link>
        </li>

        <li className="text-lg">
          <Link href={"category/products"}>All Products</Link>
        </li>
      </ul>
      {/* Searchbar  */}
      <div className=" flex justify-between  ">
        <div className="px-5 bg-gray-200 rounded-s-lg ">
          <button>
            <FaSistrix className="mt-3" />
          </button>
        </div>
        <Input
          className=" w-96"
          type="text"
          placeholder="What you looking for"
        />
      </div>

      <div className="bg-gray-200 p-4 transition-all relative hover:scale-110 rounded-full">
        <Badge className="bg-red-500  absolute top-0 right-0 rounded-full">
          0
        </Badge>
        <ShoppingCart size={24} color="black" />
      </div>
    </div>
  );
};

export default Header;
