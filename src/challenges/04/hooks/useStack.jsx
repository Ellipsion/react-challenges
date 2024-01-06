import React, { useState } from 'react'

const useStack = () => {
    const [stack, setStack] = useState([])

    const push = (item) => {
        setStack([...stack, item])
    }

    const pop = () => {
        const lastItem = stack[stack.length - 1]
        setStack(stack.filter((_, idx) => (idx + 1 !== stack.length)))
        return lastItem
    }

    const clear = () => {
        setStack([])
    }

    return [stack, push, pop, clear]
}

export default useStack