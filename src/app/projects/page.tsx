"use client";

import { useState } from "react";
import Row from "./components/row";
import ProjectModel from "./project_model";
import ImagePresenter from "./components/image_presenter";

const studentProjects = [
  new ProjectModel("Bungalov", 4, "/student/bungalov"),
  new ProjectModel("Villa", 14, "/student/villa"),
  new ProjectModel("Konut", 7, "/student/house"),
  new ProjectModel("Yatak Odası", 13, "/student/bedroom"),
  new ProjectModel("Salon", 9, "/student/saloon"),
  new ProjectModel("Çalışma Odası", 3, "/student/bungalov"),
];

const professionalProjects = [
  new ProjectModel("Restoran", 20, "/professional/restaurant"),
  new ProjectModel("Villa Dış", 6, "/professional/villa-outside"),
  new ProjectModel("Villa İç", 11, "/professional/villa-inside"),
  new ProjectModel("Klinik", 4, "/professional/clinic"),
  new ProjectModel("Konut", 6, "/professional/house"),
  new ProjectModel("Konut", 12, "/professional/house2"),
  new ProjectModel("Ofis", 5, "/professional/office"),
  new ProjectModel("Optikçi", 5, "/professional/optician"),
  new ProjectModel("Restoran", 5, "/professional/restaurant2"),
  new ProjectModel("Showroom", 3, "/professional/showroom"),
  new ProjectModel("Showroom", 5, "/professional/showroom2"),
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isStudentProjects, setIsStudentProjects] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-neutral-800">
      <div className="h-full py-4 bg-grid-white/[0.02]">
        <div className="flex flex-col items-center mb-6 relative">
          {/* Gradient background - now with -z-10 to place it behind other elements */}
          <div className="absolute inset-x-0 -top-4 h-24 bg-gradient-to-b from-neutral-700/20 via-neutral-600/10 to-transparent blur-2xl -z-10" />

          {/* Toggle buttons now in front */}
          <div className="flex gap-4 mb-6 relative z-10">
            <button
              type="button"
              onClick={() => setIsStudentProjects(false)}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                !isStudentProjects
                  ? "bg-neutral-200 text-black"
                  : "bg-neutral-700/50 text-neutral-300"
              }`}
            >
              Çalışmalarımız
            </button>
            <button
              type="button"
              onClick={() => setIsStudentProjects(true)}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                isStudentProjects
                  ? "bg-neutral-200 text-black"
                  : "bg-neutral-700/50 text-neutral-300"
              }`}
            >
              Öğrenci Çalışmaları
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 bg-clip-text text-transparent">
            {isStudentProjects ? "Öğrenci Çalışmaları" : "Çalışmalarımız"}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-neutral-500/60 via-neutral-400 to-neutral-500/60 rounded-full mt-2" />
        </div>

        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full rounded-xl border border-white/10 p-4 overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/[0.075] to-white/[0.025]">
              <div className="grid auto-rows-auto gap-4 h-full">
                {isStudentProjects
                  ? studentProjects.map((project) => (
                      <Row
                        key={project.title + project.path}
                        title={project.title}
                        setSelectedImage={setSelectedImage}
                        length={project.length}
                        path={project.path}
                      />
                    ))
                  : professionalProjects.map((project) => (
                      <Row
                        key={project.title + project.path}
                        title={project.title}
                        setSelectedImage={setSelectedImage}
                        length={project.length}
                        path={project.path}
                      />
                    ))}
              </div>
            </div>

            <ImagePresenter image={selectedImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
