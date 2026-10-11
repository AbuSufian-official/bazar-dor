
import React from 'react'
import SMcard from './smallCard';

async function Allproduct() {
    let data = [];
    try {
        let fetchData = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
        let res = await fetchData.json();
        data = Array.isArray(res) ? res : [];
    } catch {
        data = [];
    }
    
    return (
        <>
            <section id="all-products" className='container mx-auto px-2 pb-10'>
                <div className='mb-4 mt-8 flex items-baseline justify-between'>
                    <div>
                        <h2 className='font-bold text-lg sm:text-xl text-[#202a24]'>সব পণ্য</h2>
                        <p className='text-xs text-gray-500 mt-0.5'>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4'>
                    {data.map((deta, index) => {
                        return (
                            <SMcard key={index} deta={deta} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Allproduct
