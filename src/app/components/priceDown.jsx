
import React from 'react'
import SMcard from './smallCard';

async function PriceDown() {
    let filterDown = [];
    try {
        let fetchData = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
        let data = await fetchData.json();
        if (Array.isArray(data)) {
            filterDown = data.filter((n) => n?.change?.dir === "down");
        }
    } catch {
        filterDown = [];
    }
    
    return (
        <>
            <section className='container mx-auto px-2'>
                <div className='mb-4 mt-8 flex items-center justify-between'>
                    <h2 className='font-bold text-lg sm:text-xl text-[#202a24] flex items-center gap-2'>
                        <span className='text-emerald-600 font-extrabold'>▼</span> আজ দাম কমেছে
                    </h2>
                    <span className='text-xs text-gray-500 font-medium'>
                        {filterDown.length}টি পণ্য
                    </span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4'>
                    {filterDown.map((deta, index) => {
                        return (
                            <SMcard key={index} deta={deta} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default PriceDown
