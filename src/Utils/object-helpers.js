export const updateObjectInArray = (items, userId, objPropsId, newObjProps) => {
    return items.map(u => {
        if (u[objPropsId] === userId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
} 