import React from 'react'

function Filtter({deta}) {
    console.log(deta,"filter deta")
    return (
        <>
            <div className='px-4 sm:px-6 my-4 sm:my-6 text-xs sm:text-sm flex items-center justify-between sm:justify-end gap-3 py-3 sm:py-4 bg-white border border-[#E1E8E1] rounded-2xl shadow-xs'>
                <span className='text-[#1D271F] font-semibold'> 
                    সাজান:
                </span>
                <div className='w-36 sm:w-44'>
                    <select defaultValue="default" className="select select-sm w-full text-xs sm:text-sm border-gray-200 bg-gray-50/60 rounded-xl">
                        <option value="default">ডিফল্ট</option>
                        <option value="price-asc">দাম: কম থেকে বেশি</option>
                        <option value="price-desc">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
        </>

    )
}

export default Filtter
