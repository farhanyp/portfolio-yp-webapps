"use client";

import React from "react";
import { Link } from "react-scroll";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

interface SocialItem {
  icon: React.ReactNode;
  href: string;
}

export const social = [
    {
      icon: <FiInstagram />,
      href: "https://www.instagram.com/roronoav_52/",
    },
    {
      icon: <FiGithub />,
      href: "https://github.com/roronoa52",
    },
    {
      icon: <AiFillLinkedin />,
      href: "https://www.linkedin.com/in/farhan-yudha-pratama-3b095a17a/",
    },
  ];

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item: SocialItem, index: number) => (
              <Link
                key={index}
                to={item.href}
                smooth={true}
                duration={500}
                className="text-accent text-base"
              >
                {item.icon}
              </Link>
            ))}
          </div>

          <div>
            <h1 className="text-4xl">Farhan</h1>
          </div>

          <p>&copy; 2023 Farhan Yudha Pratama</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
