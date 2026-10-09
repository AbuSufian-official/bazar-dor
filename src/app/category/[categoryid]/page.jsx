import Filtter from '@/app/components/categoryfiter';
import SMcard from '@/app/components/smallCard';
import Image from 'next/image';
import React from 'react'

async function Categorypage({ params }) {
    let { categoryid } = await params
    let dataFetch = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryid}`)
    let convertDeta = await dataFetch.json();
    return (
        <>
           

            <section className='my-6'>
                <div className='container px-2 mx-auto'>

                    <div className='bg-white py-4 px-5 border rounded-[15px] border-[#E1E8E1]'>
                        <div className='flex items-center'>
                            <span className='text-2xl'>{convertDeta[0].categoryIcon}</span>
                            <h2 className='font-bold text-2xl'>{convertDeta[0].categoryNameBn}</h2>
                        </div>
                        <p className='text-[#1D271F] text-[14px]'>{convertDeta.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                    <div>
                        <Filtter/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        
                        {convertDeta.map((deta ,index)=>{
                            return(<SMcard key={index} deta={deta}/>)
                        })}
                        
                    </div>





                 </div>
            </section >
        </>
    )
}

export default Categorypage
