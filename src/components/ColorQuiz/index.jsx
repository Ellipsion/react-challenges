import React, { useEffect, useState } from 'react'

const ColorQuiz = () => {
    // Guess the correct color
    // Day 1
    // 31 Dec 2023
    const [colors, setColors] = useState([]);
    const [idx, setIdx] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showResult, SetShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const generateRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0');
        return randomColor;
    };
    const randomIndex = () => {
        return Math.floor(Math.random() * 3)
    }

    const randomize = () => {
        setColors([generateRandomColor(), generateRandomColor(), generateRandomColor()])
        setIdx(randomIndex())
        // SetShowResult(false)
    }
    useEffect(() => {
        randomize()
    }, [])

    const handleClick = (color) => {
        if (color === colors[idx]) {
            setIsCorrect(true);
            setScore(score + 1);
        } else {
            setIsCorrect(false)
        }
        randomize()
        SetShowResult(true)
    }
    return (
        <div className="flex relative overflow-hidden bg-zinc-200 min-h-screen flex-1 flex-col justify-center px-6  py-12 lg:px-8">
            <h1 className='absolute text-center my-4 font-bold uppercase -rotate-12 text-[10rem] text-zinc-300'>Guess the color!</h1>
            <div className="z-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-200 bg-gray-100/75 rounded-md p-5">
                <div className='w-full h-36' style={{ backgroundColor: colors[idx] }}></div>
                <div className='my-5 flex gap-3'>
                    {colors.map((color) => {
                        return (<button key={color} className='bg-slate-200 p-2 rounded-sm text-sm font-semibold' onClick={() => handleClick(color)}>{color}</button>)
                    })}
                </div>
                <div className='flex items-center justify-between'>
                    {
                        showResult ? (
                            isCorrect ?
                                <h1 className='text-green-400'>Correct</h1>
                                :
                                <h1 className='text-red-400'>Wrong</h1>
                        )
                            :
                            <h1></h1>

                    }
                    <h1 className='text-center float-right font-semibold'>{score}</h1>
                </div>
            </div>

        </div>
    )
}

export default ColorQuiz