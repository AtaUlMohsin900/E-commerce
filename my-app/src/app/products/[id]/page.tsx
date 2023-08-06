import { Products } from "@/utils/mock";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Quantity from "@/components/Quantity";
// import AddToCart from "@/components/AddToCart";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};
const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className="flex mt-16 py-10 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* Left Side */}
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Side */}
          <div>
            <div>
              <h1 className="text-2xl ">{product.name}</h1>
              <h2 className="text-base text-gray-400 font-samibold">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="text-xs font-semibold mt-8">SELECT SIZE</h3>
              {/* Sizes */}
              <div className="flex gap-x-3">
                {sizes.map((item) => {
                  return (
                    <div className="center w-8 h-8 mt-4 rounded-full hover:shadow-xl">
                      <span className="text-[15px] font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Quantity */}
              <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[10px] font-semibold">Quantity</h3>
                <Quantity />
              </div>
              {/* Add to cart */}
              {/* <AddToCart /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
