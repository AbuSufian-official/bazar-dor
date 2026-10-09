
import React from 'react'
import SMcard from './smallCard';

async function PriceDown() {
    let fetchData = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    let data = await fetchData.json()
    let filterUp = data.filter((n) => {
        return n.change.dir == "down"
    })
    
    return (
        <>
            <div className='container mx-auto px-2'>
                <div className='mb-5 mt-7'>
                    <h3 className='font-bold text-[18px]'><span className='text-green-600'>▼</span> আজ দাম কমেছে</h3>
                </div >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-between'>
                    {filterUp.map((deta, index) => {
                        return (
                            <SMcard key={index} deta={deta} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default PriceDown
