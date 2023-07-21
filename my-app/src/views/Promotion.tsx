import { Button } from "components/ui/button";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import event1 from "public/event1.webp";
import event2 from "public/event2.webp";
import event3 from "public/event3.webp";

const Promotion = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <Badge className="text-blue-600   bg-white">PROMOTIONS</Badge>
        <p className="font-sans font-bold text-4xl text-zinc-800">
          Our Promotions Events
        </p>
      </div>
      <section className="flex justify-center gap-8 mt-10 text-md">
        {/* Left Side */}
        <div className="flex flex-col">
          <div className="flex bg-neutral-300 px-28 h-full mb-4">
            <div>
              <h1 className="mt-10 font-bold text-4xl">
                GET UP TO <span>60%</span>
              </h1>
              <p className="text-lg">For the summer season</p>
            </div>
            <Image
              className="object-cover mt-3"
              src={event1}
              alt="event1Image"
            />
          </div>

          <div className="text-white bg-zinc-900 text-center h-full">
            <div className="mt-10">
              <h1 className="font-bold text-4xl">
                GET <span>30% </span>Off
              </h1>
              <p className="mt-3 text-sm">USE PROMO CODE</p>
            </div>
            <Button className="mt-1 text-md  bg-neutral-700">
              D I N E W E E K E N D S A L E
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex">
          <div className="bg-orange-100 mr-4 mt-1 ">
            <p className=" ml-3 mt-1">Flex Sweatshirt</p>
            <span className="ml-3">
              $100.00 <span className="font-bold ">$75.00</span>
            </span>
            <Image
              className="object-cover mt-8"
              src={event2}
              alt="event2Image"
            />
          </div>

          <div className="bg-neutral-300  mr-4 mt-1">
            <p className="mt-3 ml-3">Flex Push Button Bomber</p>
            <span className="ml-3">
              $225.00 <span className="font-bold">$190.00</span>
            </span>
            <Image
              className="object-cover mt-5"
              src={event3}
              alt="event3Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotion;
