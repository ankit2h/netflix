import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
  <div className="w-full text-white pt-4 sm:pt-[8%] pl-0 sm:pl-4 pr-1 sm:pr-8 drop-shadow-lg select-none flex flex-col items-start sm:items-start">
  <h1 className="text-3xl sm:text-7xl font-extrabold font-bebas text-netflix-red mb-1 sm:mb-3 select-none tracking-widest text-left">{title}</h1>
  <p className="w-full sm:w-2/3 mt-0 sm:mt-1 text-xs sm:text-xl font-medium text-white/90 line-clamp-3 sm:line-clamp-none text-left" style={{textShadow: "0 1px 8px #000"}}>{overview}</p>
      <div className="flex mt-4 sm:mt-8 gap-3">
  <button className="flex items-center px-2 sm:px-10 py-1 sm:py-4 bg-white text-black rounded-lg font-semibold text-sm sm:text-2xl hover:bg-opacity-80 shadow transition-colors duration-200">
          <CiPlay1 size='24px' className="sm:!w-8 sm:!h-8" /><span className='ml-3'>Play</span>
        </button>
  <button className="flex items-center px-2 sm:px-10 py-1 sm:py-4 bg-[#6d6d6e] bg-opacity-80 text-white rounded-lg font-semibold text-sm sm:text-2xl hover:bg-opacity-90 shadow transition-colors duration-200">
          <CiCircleInfo size="24px" className="sm:!w-8 sm:!h-8" /><span className='ml-3'>More Info</span>
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
