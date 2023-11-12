import React from 'react'

const CardSkeleton = () => {
  return (
    <div
      role="status"
      className="w-80 h-96 animate-pulse"
    >
      <div className="max-w-sm h-full relative bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 text-gray-700 dark:text-gray-400 dark:border-gray-700 hover:scale-[1.03] transition-transform duration-300 ease-in-out">
        <div>
          <div className="h-48 rounded-t-lg bg-gray-200"></div>
          <div className="absolute top-[150px] right-0 bg-gray-200 text-gray-200 text-sm md:text-lg font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-200"></div>
          <div className="p-2">
            <div className="mb-2 h-6 bg-gray-200 rounded-full"></div>
            <div className="border-b dark:border-gray-400 border-gray-300 mb-3 h-3 bg-gray-200"></div>
            <p className="mb-1 h-3 bg-gray-200 rounded-full"></p>
            <div className="flex items-center justify-between py-4">
              <div className="flex">
                <span className="text-xl font-bold text-gray-200 flex items-center"></span>
                <span className="bg-gray-200 text-gray-200 text-xs mr-2 px-2.5 py-0.5 flex items-center rounded-full"></span>
              </div>
              <div className="flex">
                <button className="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-5 py-2.5 text-center"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton
