"use client";

import React, { useState, useEffect } from "react";
import Project from "@/components/project";

interface NavItem {
  name: string;
}

export interface ProjectItem {
  id: string;
  image: string;
  name: string;
  category: string;
  href: string;
  desc: string;
}

const projectsNav: NavItem[] = [
  { name: "all" },
  { name: "UI/UX Design" },
  { name: "web development" },
];

const projectsData: ProjectItem[] = [
  {
    id: "1",
    image: "/assets/img/testimonials/404.jpg",
    name: "Prestige",
    category: "Web Development",
    href: "",
    desc: "(Still Development). This application is a vehicle rental platform for luxury cars, yachts, helicopters, motorbike planes and even services like Uber.",
  },
  {
    id: "2",
    image: "/assets/img/projects/tixia.png",
    name: "Tixia",
    category: "Web Development",
    href: "",
    desc: "(Still Development). This app is a hotel booking and airplane ticket purchase service provider.",
  },
  {
    id: "3",
    image: "/assets/img/testimonials/404.jpg",
    name: "Report Pegadaian",
    category: "Web Development",
    href: "",
    desc: "(Still Development). This application is an internal pawnshop reporting tool.",
  },
  {
    id: "4",
    image: "/assets/img/projects/7seven.png",
    name: "7Seven",
    category: "Web Development",
    href: "https://7seven.vercel.app",
    desc: "This project serves to do the bending for the billiard table.",
  },
  {
    id: "5",
    image: "/assets/img/projects/semina.png",
    name: "Semina",
    category: "Web Development",
    href: "https://landing-page-semina.vercel.app",
    desc: "I made this web application to practice my skills in MongoDB, Express, React, NodeJS, and API integrations.",
  },
  {
    id: "6",
    image: "/assets/img/projects/staycation.png",
    name: "Staycation",
    category: "UI/UX design",
    href: "",
    desc: "Website Staycation membantu para travelers mencari tempat penginapan dan lokasi liburan.",
  },
  {
    id: "7",
    image: "/assets/img/projects/staycation.png",
    name: "Staycation",
    category: "web development",
    href: "https://mern-staycation.pages.dev",
    desc: "Website Staycation membantu para travelers mencari tempat penginapan dan lokasi liburan.",
  },
  {
    id: "8",
    image: "/assets/img/projects/admin-staycation.png",
    name: "Admin Staycation",
    category: "web development",
    href: "https://mern-staycation-server.vercel.app/admin/signin",
    desc: "Website Admin Staycation membantu penyedia tempat liburan dan penginapan dalam penjualan.",
  },
  {
    id: "9",
    image: "/assets/img/projects/baznas.png",
    name: "Baznas",
    category: "web development",
    href: "https://baznas-pwt.pages.dev",
    desc: "Website Baznas Banyumas membantu penyedia jasa zakat, infaq, dan sedekah dalam lingkup Banyumas.",
  },
];

const Projects: React.FC = () => {
  const [item, setItem] = useState<NavItem>({ name: "all" });
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) =>
        project.category.toLowerCase() === item.name.toLowerCase()
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    const target = e.target as HTMLElement;
    setItem({ name: target.textContent?.toLowerCase() || "all" });
    setActive(index);
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((navItem, index) => (
            <li
              key={index}
              onClick={(e) => handleClick(e, index)}
              className={`cursor-pointer capitalize m-4 ${
                active === index ? "active" : ""
              }`}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((project) => (
          <Project item={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
