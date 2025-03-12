"use client";

import React, { useState, useEffect } from "react";
import Project from "@/components/project";

interface NavItem {
  name: string;
}

export interface ProjectItem {
  _id?: string;
  id: string;
  image: string;
  name: string;
  category: string;
  href: string;
  desc: string;
  pinned: boolean;
  __v?: number;
}

const projectsNav: NavItem[] = [
  { name: "all" },
  { name: "UI/UX Design" },
  { name: "web development" },
];

const Projects: React.FC = () => {
  const [item, setItem] = useState<NavItem>({ name: "all" });
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [active, setActive] = useState<number>(0);
  const [allProjects, setAllProjects] = useState<ProjectItem[]>([]);

  // Ambil data proyek dari API, filter hanya yang pinned true, dan update URL gambar
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api-portfolio-blush.vercel.app/api/v1/projects");
        const result = await response.json();
        // Filter hanya proyek dengan pinned bernilai true dan update URL gambar
        const pinnedProjects = result.data
          .filter((project: ProjectItem) => project.pinned === true)
          .map((project: ProjectItem) => ({
            ...project,
            image: `/assets/img/projects/${project.image}`,
          }));
        setAllProjects(pinnedProjects);
        setProjects(pinnedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filter data proyek berdasarkan kategori yang dipilih
  useEffect(() => {
    if (item.name === "all") {
      setProjects(allProjects);
    } else {
      const newProjects = allProjects.filter((project) =>
        project.category.toLowerCase() === item.name.toLowerCase()
      );
      setProjects(newProjects);
    }
  }, [item, allProjects]);

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
              key={`nav-${index}`}
              onClick={(e) => handleClick(e, index)}
              className={`cursor-pointer capitalize m-4 ${active === index ? "active" : ""}`}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((project, index) => (
          <Project item={project} key={`project-${index}`} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
