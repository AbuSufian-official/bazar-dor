import React from 'react'

function Filtter() {
    return (
        <>
            <div className='px-6 my-6 text-[14px] flex items-center gap-2 justify-end py-5 bg-white border border-[#E1E8E1] rounded-[15px]'>
                <span className='text-[#1D271F]'> 
                    সাজান
                </span>
                <div className='w-30'>
                    <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>ডিফল্ট</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                </div>
            </div>

        </>

    )
}

export default Filtter
