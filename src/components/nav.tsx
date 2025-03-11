"use client";

import React from 'react';
import { Link } from 'react-scroll';

interface NavigationItem {
  href: string;
  name: string;
}

const navigation: NavigationItem[] = [
  { name: "home", href: "home" },
  { name: "about", href: "about" },
  { name: "portfolio", href: "portfolio" },
  { name: "services", href: "services" },
  { name: "testimonials", href: "testimonials" },
  { name: "contact", href: "contact" },
];

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => (
          <li key={index} className="text-white hover:text-accent cursor-pointer">
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
