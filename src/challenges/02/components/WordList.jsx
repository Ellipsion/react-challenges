import React from 'react'

const WordList = ({ loading, synonyms }) => {
    if (loading) return <Loader />
    return (
        <ul className='my-10'>
            {
                synonyms?.map(({ word, score }, idx) => (
                    <li key={`wordlist-${word}-${score}-${idx}`} className='list-item list-disc'><p className='text-xl cursor-pointer text-gray-700 hover:text-gray-500 font-semibold'>{word}</p></li>
                ))
            }
        </ul>
    )
}

const Loader = () => {
    const randomWidth = () => {
        return 50 + Math.floor(Math.random() * 70)
    }
    return (
        <ul className='my-10'>
            {
                new Array(5).fill(0).map((item, idx) => (
                    <li key={`word-loader-${idx}`} className='list-item marker:text-gray-300 list-disc p-2 animate-pulse'><p className='text-xl bg-gray-300 h-3 w-24' style={{ width: randomWidth() }}></p></li>
                ))
            }
        </ul>
    )
}

export default WordList