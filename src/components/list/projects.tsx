"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Project from "@/components/list/project";

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
  const [loading, setLoading] = useState<boolean>(true);

  // Ambil data proyek dari API menggunakan axios, filter hanya yang pinned true, dan update URL gambar
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api-portfolio-blush.vercel.app/api/v1/projects");
        const result = response.data;
        // Filter hanya proyek dengan pinned bernilai true dan update URL gambar
        const pinnedProjects = result.data
          .map((project: ProjectItem) => ({
            ...project,
            image: `/assets/img/projects/${project.image}`,
          }));
        setAllProjects(pinnedProjects);
        setProjects(pinnedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-primary">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-primary">
        <p className="text-white text-xl">Project is not found</p>
      </div>
    );
  }

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
