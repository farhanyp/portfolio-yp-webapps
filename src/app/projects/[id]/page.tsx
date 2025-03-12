"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export interface ProjectItem {
  _id?: string;
  image: string;
  name: string;
  category: string;
  href: string;
  desc: string;
  isDevelopment?: boolean;
  isFakeProject?: boolean;
  contribution: string;
}

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams(); // Ambil parameter id dari URL
  const [project, setProject] = useState<ProjectItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    const fetchProject = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api-portfolio-blush.vercel.app/api/v1/projects/${id}`
        );
        const result = await response.json();
        // Asumsi respon API: { status_code, message, data: { ... } }
        setProject(result.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <div>
        <div className="bg-primary min-h-screen">
          <div className="container mx-auto h-full py-32 flex flex-col items-center text-center">
            <h1 className="font-body text-5xl">
              {project.name}
              {project.name}
              {project.isDevelopment && (
                <span className="text-lg text-red-500"> (Still Development)</span>
              )}
              {project.isFakeProject && (
                <span className="text-lg text-red-500"> (Fake Project)</span>
              )}
            </h1>
            <p className="font-body mt-4 text-accent text-xl font-medium">
              {project.category}
            </p>
            <div className="my-16">
              <Image
                src={`/assets/img/projects/${project.image}`}
                alt={project.name}
                height={200}
                width={400}
                className="rounded-2xl"
              />
            </div>
        
            {/* Tampilkan tombol hanya jika isDevelopement bukan true */}
            {!project.isDevelopment && (
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all mb-14">
                <a href={project.href}>Go to Website</a>
              </button>
            )}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-secondary p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-accent mb-4 text-left">
                  Description
                </h3>
                <p className="text-paragraph text-base leading-relaxed text-left max-w-lg">
                  {project.desc}
                </p>
              </div>
              <div className="flex-1 bg-secondary p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-accent mb-4 text-left">
                  My participation in this project
                </h3>
                {project.contribution && (
                  <ul className="list-disc list-inside text-paragraph text-base leading-relaxed text-left max-w-lg">
                    {project.contribution.split(", ").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
