import ProjectShowcase from "../../../src/component/ProjectShowcase";
import projects from "../../data/jsons/graphicsProjects.json";

export default function GraphicsDesignProjectsPage() {
  return (
    <ProjectShowcase
      eyebrow="Graphics Design Portfolio"
      heading="Visual systems that make brands feel unforgettable."
      description="A refined starter gallery for graphic design work."
      projects={projects}
      tone={{
        eyebrow: "border-orange-200 bg-white/70 text-orange-700 dark:border-orange-500/30 dark:bg-slate-900/60 dark:text-orange-300",
        button: "bg-orange-500 hover:bg-orange-600",
        buttonHover: "hover:shadow-lg hover:shadow-orange-500/30",
        activeCard: "border-orange-400 bg-orange-50 shadow-lg shadow-orange-500/10 dark:border-orange-400 dark:bg-orange-500/10",
        listButton: "hover:border-orange-400 hover:text-orange-600",
        chip: "bg-orange-500/20 text-orange-200",
        accent: "orange",
      }}
      buttonLabel="View project"
      listHeading="Recent work"
      metaLabel="Status"
    />
  );
}
