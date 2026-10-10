"use client"
import React, { useState } from 'react'

function Filtter({deta}) {
let [types,settypes]=useState(null)

    function handelShort(a){
        console.log(a)
    }


    return (
        <>
            <div className='px-4 sm:px-6 my-4 sm:my-6 text-xs sm:text-sm flex items-center justify-between sm:justify-end gap-3 py-3 sm:py-4 bg-white border border-[#E1E8E1] rounded-2xl shadow-xs'>
                <span className='text-[#1D271F] font-semibold'> 
                    সাজান:
                </span>
                <div className='text-black w-36 sm:w-44'>
                    <select onChange={(e)=>handelShort(e.target.value)} defaultValue="default" className="text-black select select-sm w-full text-xs sm:text-sm border-gray-200 bg-gray-50/60 rounded-xl">
                        <option className='text-black' value="default">ডিফল্ট</option>
                        <option className='text-black' value="loww">দাম: কম থেকে বেশি</option>
                        <option className='text-black' value="high">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
        </>

    )
}

export default Filtter
