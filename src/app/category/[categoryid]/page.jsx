import Filtter from '@/app/components/categoryfiter';
import SMcard from '@/app/components/smallCard';
import Image from 'next/image';
import React from 'react'

async function Categorypage({ params }) {
    let { categoryid } = await params;
    let products = [];
    try {
        let dataFetch = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryid}`);
        let convertDeta = await dataFetch.json();
        products = Array.isArray(convertDeta) ? convertDeta : [];
    } catch {
        products = [];
    }

    const categoryIcon = products[0]?.categoryIcon || "🏷️";
    const categoryName = products[0]?.categoryNameBn || categoryid;

    return (
        <>
            <section className='my-4 sm:my-6'>
                <div className='container px-2 mx-auto'>

                    <div className='bg-white py-4 px-4 sm:px-6 border rounded-2xl border-[#E1E8E1] shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                        <div className='flex items-center gap-2.5'>
                            <span className='text-2xl sm:text-3xl p-2 bg-[#f0f5f0] rounded-xl'>{categoryIcon}</span>
                            <div>
                                <h1 className='font-extrabold text-xl sm:text-2xl text-[#1D271F]'>{categoryName}</h1>
                                <p className='text-[#616e63] text-xs sm:text-sm mt-0.5'>{products.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Filtter/>
                    </div>

                    {products.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4'>
                            {products.map((deta, index) => {
                                return (<SMcard key={index} deta={deta}/>)
                            })}
                        </div>
                    ) : (
                        <div className='bg-white rounded-2xl border border-[#E1E8E1] p-10 text-center text-gray-500'>
                            <p className='text-sm sm:text-base'>এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}

export default Categorypage
