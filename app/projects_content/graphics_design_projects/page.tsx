import ProjectShowcase from "../../../src/component/ProjectShowcase";
import projects from "../../data/jsons/graphicsProjects.json";

export default function GraphicsDesignProjectsPage() {
  return (
    <ProjectShowcase
      eyebrow="Graphics Design"
      heading="Visual systems that make brands feel unforgettable."
      description="A refined starter gallery for graphic design work."
      projects={projects}
      tone={{
        eyebrow: "border-blue-200 bg-white/70 text-blue-700 dark:border-blue-500/30 dark:bg-slate-900/60 dark:text-blue-300",
        button: "bg-blue-500 hover:bg-blue-600",
        buttonHover: "hover:shadow-lg hover:shadow-blue-500/30",
        activeCard: "border-blue-400 bg-blue-50 shadow-lg shadow-blue-500/10 dark:border-blue-400 dark:bg-blue-500/10",
        listButton: "hover:border-blue-400 hover:text-blue-600",
        chip: "bg-blue-500/20 text-blue-200",
        accent: "blue",
      }}
      buttonLabel="View Design"
      listHeading="Recent work"
      metaLabel="Status"
    />
  );
}
