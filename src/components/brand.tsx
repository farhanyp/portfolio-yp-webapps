"use client";

import React from "react";
import Image from "next/image";

interface BrandItem {
  img: string;
  href: string;
}

const brands: BrandItem[] = [
  { img: "/assets/img/skills/psql.png", href: "" },
  { img: "/assets/img/skills/laravel.png", href: "" },
  { img: "/assets/img/skills/nodejs.png", href: "" },
  { img: "/assets/img/skills/golang.png", href: "" },
  { img: "/assets/img/skills/figma.png", href: "" },
  { img: "/assets/img/skills/redis.png", href: "" },
];

const Brand: React.FC = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container mx-auto flex flex-wrap justify-evenly items-center">
        {brands.map((brand: BrandItem, index: number) => (
          <div
            key={index}
            className="relative w-16 h-16 md:w-24 md:h-24 m-2"
          >
            <Image
              src={brand.img}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
