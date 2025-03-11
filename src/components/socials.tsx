"use client";

import React from "react";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

interface SocialItem {
  href: string;
  icon: React.ReactNode;
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

const Socials: React.FC = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item: SocialItem, index: number) => (
        <li key={index} className="flex justify-center text-accent">
          <a className="text-base" href={item.href} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
