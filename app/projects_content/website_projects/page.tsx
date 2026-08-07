import ProjectShowcase from "../../../src/component/ProjectShowcase";
import projects from "../../data/jsons/websiteProjects.json";

export default function WebsiteProjectsPage() {
  return (
    <ProjectShowcase
      eyebrow="Web & App"
      heading="Modern builds for brands, products, and launches."
      description="A clean starter showcase for website and app projects."
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
      buttonLabel="View project"
      listHeading="Recent builds"
      metaLabel="Status"
    />
  );
}
