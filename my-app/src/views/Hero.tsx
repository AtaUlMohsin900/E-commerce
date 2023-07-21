import { Badge } from "@/components/ui/badge";
import { Button } from "components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroImage from "../../public/heroImage.webp";
import Featured1 from "../../public/Featured1.webp";
import Featured2 from "../../public/Featured2.webp";
import Featured3 from "../../public/Featured3.webp";
import Featured4 from "../../public/Featured4.webp";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6">
      {/* Left Div */}
      <div className="flex-1">
        <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 ">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on <br />
          Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as <br />
          long as you wear Dine outfits.
        </p>
        <Button className="bg-black h-12 px-8 mt-6">
          <ShoppingCart className="mr-4" />
          Start Shopping
        </Button>
        <div className="flex justify-evenly items-center mt-10 py-8 ">
          <Image src={Featured1} alt="image" />
          <Image src={Featured2} alt="image" />
          <Image src={Featured3} alt="image" />
          <Image src={Featured4} alt="image" />
        </div>
      </div>

      {/* Right Div */}
      <div className="flex header-circle">
        <div className="bg-orange-100  rounded-full">
          <Image src={heroImage} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
