export const mediaFilesTransformer = (mediaFile) => {
    return {
        id: mediaFile.id,
        url: mediaFile.url
    }
}