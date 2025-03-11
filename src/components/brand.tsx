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
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand: BrandItem, index: number) => (
          <div key={index}>
            <Image
              src={brand.img}
              alt=""
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
