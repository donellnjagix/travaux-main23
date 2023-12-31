import React from "react";
import Link from "next/link";
import { Attribute } from "../types/types";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string[]; // This is an array of image strings
  shortDescription: string;
  longDescription?: string;
};

const Card = ({
  id,
  name,
  price,
  image, // image is still an array of strings
  shortDescription,
  longDescription,
}: Props) => {
  return (
    <div className="bg-2ec4b6 shadow-md p-4 flex flex-col items-center text-center card-container" style={{ height: '500px' }}>

      <div className="relative h-60 w-full flex-shrink-0">
        {/* Map over the array of image strings and render each image */}
        {image.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={name}
            fill
            sizes="(max-width: 480px) 100vw,
                    (max-width: 768px) 75vw,
                    (max-width: 1060px) 50vw,
                    33vw"
            className="object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
          />
        ))}
      </div>
      <div className="font-bold text-lg text-accent-black">{name}</div>
      <div className="flex-grow">{shortDescription}</div>
      <div className="flex flex-row justify-between gap-2 mt-2">
        <div className="flex items-center">
          <Link href={`/properties/${id}`}>
            <a className="bg-transparent border border-accent-orange text-accent-orange py-1 px-3 rounded-md hover:bg-accent-orange hover:text-alice-blue">
              View
            </a>
          </Link>
        </div>
        <div className="border bg-[#dde6f5] border-accent-orange py-1 px-3 rounded-md text-accent-orange">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default Card;
