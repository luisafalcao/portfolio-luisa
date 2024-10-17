import { ProjectNavProps } from "@/app/types/customTypes";
import clsx from "clsx";

export default function ProjectNav({ className }: ProjectNavProps) {
    return <p className={clsx("", className)}>nav</p>
}