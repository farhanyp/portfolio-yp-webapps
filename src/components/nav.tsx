"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

interface NavigationItem {
  href: string;
  name: string;
}

const navigation: NavigationItem[] = [
  { name: "home", href: "home" },
  { name: "projects", href: "/projects" },
];

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => (
          <li key={index} className="text-white hover:text-accent cursor-pointer">
            {item.href.startsWith("/") ? (
              <Link href={item.href} className="transition-all duration-300">
                {item.name}
              </Link>
            ) : (
              <ScrollLink
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
