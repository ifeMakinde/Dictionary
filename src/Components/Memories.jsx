import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const memoriesData = [
  { id: 0, image: image1 },
  { id: 1, image: image2 },
  { id: 2, image: image3 },
  { id: 3, image: image4 },
  { id: 4, image: image5 },
  { id: 5, image: image6 },
  { id: 6, image: image7 },
  { id: 7, image: image8 },
  { id: 8, image: image9 },
  { id: 9, image: image10 },
  { id: 10, image: image11 },
  { id: 11, image: image12 },
  { id: 12, image: image13 },
];

function Memories() {
  return (
    <div
      className="m-auto bg-pink-100 text-center flex flex-col gap-4 justify-center items-center"
      id="memories"
    >
      <h3 className="text-4xl lg:text-5xl font-medium capitalize italic">
        our core <span className="text-pink-400">memories</span>
      </h3>

      <p className="text-base lg:text-md w-80 lg:w-100 text-pink-500 font-light">
        {" "}
        I'd argue every moment with you is a core memory, but here are a few one
        i carefully curated
      </p>

      <div className="flex justify-center items-center m-auto max-w-[90%] p-6 ">
        <Carousel className="">
          <CarouselContent>
            {memoriesData.map((memory) => (
              <CarouselItem
                key={memory.id}
                className="rounded-xl overflow-hidden shadow-lg h-[45%] lg:h-[35%] max-w-100 lg:max-w-150"
              >
                <img
                  src={memory.image}
                  alt={`Memory ${memory.id}`}
                  className="rounded-xl lg:h-160 w-full object-cover object-center "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious size="32" />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Memories;
