"use client";

import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";

const navigation = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
];

const NavMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const circleVariants: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
        <Bars3Icon className="w-8 h-8" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full fixed top-0 right-0 bg-accent"
      />

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
          <XMarkIcon className="w-8 h-8" />
        </div>
        {navigation.map((item, index) => (
          <li key={index} className="mb-8">
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-xl cursor-pointer capitalize"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
