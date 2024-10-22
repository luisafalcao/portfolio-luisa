import { ProjectNavProps } from "@/app/types/customTypes"
import { getPreviousProject, getNextProject } from "@/app/utils/getProjects";
import Arrow from "./Arrow";

export default async function ProjectNav({ uid, projectsArray, currentLang }: ProjectNavProps) {
    const projects = projectsArray ? projectsArray : []
    const currentProject = uid ? uid : ""
    const currentLanguage = currentLang ?? ""

    const previousProject = getPreviousProject(projects, currentProject)
    const nextProject = getNextProject(projects, currentProject)

    return (
        <div className="flex justify-between mt-6">
            <Arrow direction="previous" targetProject={previousProject} currentLang={currentLanguage} />
            <Arrow direction="next" targetProject={nextProject} currentLang={currentLanguage} />
        </div>
    )
}
