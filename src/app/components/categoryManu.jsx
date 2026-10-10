import Link from 'next/link';
import React from 'react'

async function CatagoryManu() {
    let data = [];
    try {
        let fetchData = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
        let res = await fetchData.json();
        data = Array.isArray(res) ? res : [];
    } catch {
        data = [];
    }
    
    return (
        <>
            <div className='border-t border-[#E1E8E1] bg-[#FAFCFA]'>
                <div className='container px-2 mx-auto'>
                    <div className='flex gap-3 sm:gap-4 md:gap-2 items-center overflow-x-auto py-2.5 no-scrollbar scroll-smooth whitespace-nowrap md:justify-between'>
                        {data.map((n, index) => {
                            return (
                                <Link 
                                    key={index} 
                                    className='text-xs sm:text-[13px] flex gap-1.5 items-center shrink-0 px-2 py-1 rounded-md hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 transition-colors' 
                                    href={`/category/${n.slug}`}
                                >
                                    <span className="text-sm">{n.icon}</span>
                                    <span className='font-semibold'>{n.nameBn}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatagoryManu
