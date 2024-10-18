import { PrismicDocument } from "@prismicio/client";
import { ContextWithPages } from "../types/customTypes";

// Descobrir se context é uma array de PrismicDocuments (PrismicDocument[]) 
// ou um objeto com a propriedade 'pages':
function getProjectsArray(context: PrismicDocument[] | ContextWithPages): PrismicDocument[] {
    if (Array.isArray(context)) {
        return context;
    }
    if (context && 'pages' in context && Array.isArray(context.pages)) {
        return context.pages;
    }
    return [];
}

function getNextProject(array: PrismicDocument[], currentUid: string) {
    const currentItem = array.find(item => item.data.uid === currentUid)

    if (!currentItem) {
        return null; // Return null or handle the case when the project is not found
    }

    const index = array.indexOf(currentItem)

    if (index !== -1 && index < array.length - 1) {
        return array[index + 1]
    }
    return null
}

function getPreviousProject(array: PrismicDocument[], currentUid: string) {
    const currentItem = array.find(item => item.data.uid === currentUid)

    if (!currentItem) {
        return null; // Return null or handle the case when the project is not found
    }

    const index = array.indexOf(currentItem)

    if (index !== -1 && index < array.length - 1) {
        return array[index - 1]
    }
    return null
}

export { getProjectsArray, getNextProject, getPreviousProject }