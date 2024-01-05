const createRoutes = (challenges) => {
    return challenges.map((item, idx) => {
        return {
            path: `${idx + 1}`,
            element: item.element
        }
    })
}

export { createRoutes }