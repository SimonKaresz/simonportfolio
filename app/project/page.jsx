import ProjectCard from "@components/ProjectCard";
import React from "react";

import ProjectCardData from "@constants/data";

const Project = () => {
  return (
    <section className="w-[90%] mx-auto pt-[30px]  md:pt-[60px] sm:px-5 lg:px-[60px]">
      <div className="grid grid-cols-1 pb-10 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProjectCardData.map((data) => {
          return (
            <ProjectCard
              key={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              technology={data.technology}
              code_link={data.code_link}
              view_link={data.view_link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
