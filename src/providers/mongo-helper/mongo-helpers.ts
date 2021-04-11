export const MongHelper = {
  map: (collection: any): any => {
    const { id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { _id: id })
  }
}
