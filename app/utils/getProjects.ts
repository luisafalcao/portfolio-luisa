import { PrismicDocument } from "@prismicio/client";

// Descobrir se context é uma array de PrismicDocuments (PrismicDocument[]) 
// ou um objeto com a propriedade 'pages':
function getProjectsArray(context: PrismicDocument[]): PrismicDocument[] {
    if (Array.isArray(context)) {
        return context;
    }
    return [];
}

function getNextProject(array: PrismicDocument[], currentUid: string) {
    const currentItem = array.find(item => item.uid === currentUid)

    if (!currentItem) {
        return null; // Return null or handle the case when the project is not found
    }

    const index = array.indexOf(currentItem)

    // if it's the last item of the array
    if (index !== -1 && index === array.length - 1) {
        return array[0]
    }

    if (index !== -1 && index < array.length - 1) {
        return array[index + 1]
    }
    return null
}

function getPreviousProject(array: PrismicDocument[], currentUid: string) {
    const currentItem = array.find(item => item.uid === currentUid)

    if (!currentItem) {
        console.log("current item é undefined", currentItem)
        return null; // Return null or handle the case when the project is not found
    }

    const index = array.indexOf(currentItem)

    // if it's the first item of the array
    if (index !== -1 && index === 0) {
        return array[array.length - 1]
    }

    // if there is an index (index !== -1), if this index isn't 0 (first of an array) and isn't the last item of the array (index < array.length - 1)
    if (index !== -1 && index <= array.length - 1) {
        return array[index - 1]
    }

    return null
}

export { getProjectsArray, getNextProject, getPreviousProject }


