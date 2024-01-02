import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <label className='bg-white cursor-text w-full flex p-5 items-center absolute bottom-0 shadow-md rounded'>
            <div className='font-bold text-xl text-gray-400 mr-4'><IoSearch /></div>
            <input className='outline-none text-base h-7 text-gray-800 font-normal placeholder:text-gray-300 leading-tight' placeholder='Search synonyms...' id='search-input' type="text" />
        </label>
    )
}

export default SearchBar