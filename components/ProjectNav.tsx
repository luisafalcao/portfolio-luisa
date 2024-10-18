import { ProjectNavProps } from "@/app/types/customTypes"
import { getPreviousProject, getNextProject } from "@/app/utils/getProjects";
import Arrow from "./Arrow";

export default async function ProjectNav({ uid, projectsArray }: ProjectNavProps) {
    const projects = projectsArray ? projectsArray : []
    const currentProject = uid ? uid : ""

    const previousProject = getPreviousProject(projects, currentProject)
    const nextProject = getNextProject(projects, currentProject)

    return (
        <div className="flex justify-end">
            <Arrow direction="left" targetProject={previousProject} />
            <Arrow direction="right" targetProject={nextProject} />
        </div>
    )
}
