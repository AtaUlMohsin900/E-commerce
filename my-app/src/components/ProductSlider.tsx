"use client";
import { Products } from "@/utils/mock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";
import { Badge } from "../../components/ui/badge";

export default function ImageSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
  };

  const slider = useRef<Slider>(null);

  function scroll(e: WheelEvent) {
    if (slider === null) return 0;
    if (slider.current) {
      e.deltaY > 0 ? slider.current.slickNext() : slider.current.slickPrev();
    }
  }
  useEffect(() => {
    window.addEventListener("wheel", scroll, true);
    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);
  const productChecks1 = Products.slice(0, 7);
  return (
    <div className="mt-20 ">
      <div className="flex flex-col items-center ">
        <Badge className="text-blue-600   bg-white hover:bg-white">
          PRODUCTS
        </Badge>
        <h1 className="font-sans font-bold text-4xl text-zinc-800 ">
          Check What We Have
        </h1>
      </div>
      <div className="pt-10 w-[90vw] mx-auto h-[100vh]  ">
        {
          <Slider {...settings} ref={slider}>
            {productChecks1.map((product) => (
              <div className=" hover:scale-110 transition-all" key={product.id}>
                <ProductCard
                  key={product.id}
                  title={product.name}
                  price={product.price}
                  img={product.image as StaticImageData}
                  category={product.category}
                  id={product.id}
                />
              </div>
            ))}
          </Slider>
        }
      </div>
    </div>
  );
}
