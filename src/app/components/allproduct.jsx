
import React from 'react'
import SMcard from './smallCard';

async function Allproduct() {
    let fetchData = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    let data = await fetchData.json()
    
    
    return (
        <>
            <div className='container mx-auto px-2'>
                <div className='mb-5 mt-7'>
                    <h3 className='font-bold text-[18px]'> সব পণ্য</h3>
                    <p>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
                </div >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-between'>
                    {data.map((deta, index) => {
                        return (
                            <SMcard key={index} deta={deta} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Allproduct
