// src/app/projects/[id]/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/router";

// Sample project data (replace with real data from props or API)
const projectData = [
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
];

const ProjectDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Ambil id dari URL

  // Temukan data proyek berdasarkan ID
  const project = projectData.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>{project.desc}</p>
      <a href={project.href}>Go to Website</a>
    </div>
  );
};

export default ProjectDetailPage;
