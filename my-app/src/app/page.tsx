import Image from "next/image";
import Hero from "@/views/Hero";
import { Component, Layout } from "lucide-react";
import ImageSlider from "../components/ProductSlider";
import Promotion from "@/views/Promotion";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotion />
      <ImageSlider />
    </div>
  );
}
