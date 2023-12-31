import React from 'react'
import ProjectCard from '../../components/ProjectCard'

const Home = () => {
    return (
        <div className="flex relative text-white bg-[#202124] min-h-screen ">
            <div className='min-h-screen  border-zinc-500 border-r-2  min-w-36'></div>
            <div className='p-10 '>
                <div className='min-h-screen flex-1 flex flex-col justify-between '>
                    <h1 className='text-xl font-normal tracking-wide'>Ellipsion</h1>
                    <h1 className='text-[6rem] font-semibold tracking-wide'>React Challenges</h1>
                    <h1 className='text-sm font-normal tracking-wide animate-bounce'>scroll</h1>
                </div>
                <div className='mt-10'>
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}

export default Home