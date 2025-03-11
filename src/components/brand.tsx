"use client";

import React from "react";
import Image from "next/image";

interface BrandItem {
  img: string;
  href: string;
}

const brands: BrandItem[] = [
    { img: "/assets/img/brands/freelancer.png", href: "" },
    { img: "/assets/img/brands/upwork.png", href: "" },
    { img: "/assets/img/brands/fiverr.png", href: "" },
    { img: "/assets/img/brands/behance.png", href: "" },
    { img: "/assets/img/brands/dribbble.png", href: "" },
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
              width={150}
              height={50}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
