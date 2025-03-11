// src/app/projects/page.tsx
"use client";

import React from "react";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

const ProjectsPage: React.FC = () => {
  return (
    <>
        <Header/>
        <div className="bg-tertiary min-h-screen">
            <div className="container mx-auto h-full py-32">
            {/* Header Section */}
            <header className="container mx-auto py-8 text-center text-white">
                <h1 className="text-4xl font-extrabold text-white pb-6">List of Projects</h1>
                <p className="text-lg text-paragraph mt-2">
                Here are the projects I've worked on using various technologies and frameworks.
                </p>
            </header>

            {/* Projects List Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="flex flex-wrap justify-center gap-8">
                <Projects />
                </div>
            </section>

            </div>
        </div>
        <Footer/>
    </>
  );
};

export default ProjectsPage;
