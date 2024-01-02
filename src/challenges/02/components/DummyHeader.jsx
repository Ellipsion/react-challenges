import React from 'react'
import logo from "../../../assets/logo.jpeg"

const Header = () => {
    return (
        <div className='h-[100px] flex justify-between items-center w-full bg-white px-5 lg:px-12'>
            <div className='hidden lg:flex flex-1 gap-10 justify-normal items-center'>
                <p className='font-medium text-gray-600'>Home</p>
                {
                    new Array(3).fill(0).map(item => (
                        <div className='h-1 w-20 bg-gray-600'></div>
                    ))
                }
            </div>
            <div className='flex gap-10 justify-center items-center'>
                <h1 className='font-semibold text-2xl -rotate-6 tracking-wider' style={{
                    fontFamily: ['Satisfy', 'cursive']
                }}>Ellipsion</h1>
            </div>
            <div className='flex flex-1 gap-10 justify-end items-center'>
                <button className='hidden lg:flex px-5 py-3 text-md font-semibold border rounded-full'>Some Button</button>
                <div className='flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden'>
                    <img className='' src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Header