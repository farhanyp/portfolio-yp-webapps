"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ProjectItem {
  _id?: string; // properti utama untuk identifikasi
  image: string;
  name: string;
  category: string;
  href: string;
  desc: string;
  isDevelopment?: boolean;
  isFakeProject?: boolean;
}

interface ProjectProps {
  item: ProjectItem;
  index?: number; // optional, digunakan untuk menghitung delay animasi
}

const Project: React.FC<ProjectProps> = ({ item, index = 0 }) => {
  return (
    <motion.div
      key={item._id}
      className="flex flex-col items-center text-center h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <h3 className="text-2xl font-semibold capitalize mb-3">
        {item.name}
        {item.isDevelopment && (
          <span className="text-lg text-red-500"> (Still Development)</span>
        )}
        {item.isFakeProject && (
          <span className="text-lg text-red-500"> (Fake Project)</span>
        )}
      </h3>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <div className="mb-8 border-2 rounded-lg border-accent p-6 flex flex-col justify-between items-center gap-5 h-full">
        <img
          className="rounded-2xl w-full h-48 object-cover"
          src={item.image}
          alt={item.name}
        />
        <p className="text-justify flex-grow">{item.desc}</p>
        <a
          href={`/projects/${item._id}`}
          className="py-2 px-4 bg-accent text-white rounded-lg"
        >
          See Detail
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
