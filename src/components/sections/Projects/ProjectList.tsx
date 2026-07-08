import type { Project } from "@/data/portfolio";
import ProjectItem from "./ProjectItem";

type ProjectListProps = {
  projects: Project[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export default function ProjectList({
  projects,
  activeIndex,
  setActiveIndex,
}: ProjectListProps) {
  return (
    <div className="flex flex-col w-full">
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          index={index}
          isActive={index === activeIndex}
          onActivate={() => setActiveIndex(index)} 
        />
      ))}
    </div>
  );
}