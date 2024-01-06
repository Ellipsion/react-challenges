import React, { useState } from 'react'
import useStack from '../hooks/useStack'

const DotCanvas = () => {
    const [stack, push, pop, clear] = useStack()
    const [popped, addPopped, removePopped, clearPopped] = useStack()

    const handleClick = (event) => {
        // console.log(event)
        const { target: { id, offsetTop }, timeStamp, clientX, clientY } = event
        if (id === "canvas") {
            const point = {
                id: timeStamp,
                position: { left: clientX, top: clientY - offsetTop }
            }
            push(point)
            clearPopped()
        }
    }

    const handleUndo = () => {
        const lastItem = pop()
        if (lastItem) addPopped(lastItem)
    }

    const handleRedo = () => {
        const lastItem = removePopped()
        if (lastItem) push(lastItem)
    }

    const handleReset = () => {
        clear()
        clearPopped()
    }

    const dots = stack.map(dot => {
        const { id, position } = dot
        return (
            <div
                key={id}
                style={{ ...position }}
                className='absolute z-10 w-5 aspect-square bg-orange-400'>
            </div>)
    })
    return (
        <div className='flex flex-col w-full h-screen'>
            <div className='w-full flex gap-10 items-center justify-center h-12 bg-slate-500'>
                <Button disabled={!stack.length} onClick={handleUndo}>undo</Button>
                <Button disabled={!popped.length} onClick={handleRedo}>redo</Button>
                <Button onClick={handleReset}>reset</Button>
            </div>
            <div id='canvas' className='relative w-full flex-1 bg-slate-600' onClick={handleClick}>
                {dots}
            </div>
        </div>
    )
}

const Button = ({ children, ...props }) => {
    return <button {...props} className='px-2 py-1 rounded bg-gray-100 disabled:bg-gray-400'>{children}</button>
}

export default DotCanvas