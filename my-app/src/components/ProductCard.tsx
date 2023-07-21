import Image, { StaticImageData } from "next/image";

import AddToCart from "./AddToCart";
import { ShoppingCart } from "lucide-react";
import { Button } from "components/ui/button";
import Link from "next/link";

const ProductCard = (props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) => {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="py-5">
        <Image src={props.img} alt="product" />
        <h3 className="font-blod text-lg mt-3">{props.title}</h3>

        <p className="font-blod text-lg">${props.category}</p>
        <p className="font-blod text-lg">
          Category{""}
          <span className="text-base font-normal capitalize">
            {props.category}
          </span>
        </p>

        <p className="font-blod text-lg">${props.price}</p>
        <Button className="bg-red-500 h-10 px-3 mt-2">
          <ShoppingCart className="mr-4" />
          Add to cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
