import Link from 'next/link';
import React from 'react'

async function CatagoryManu() {
    let fetchData = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    let data = await fetchData.json()
    console.log(data)
    return (
        <>
            <div className='border-t border-[#F0F5F0]'>
                <div className='container px-2 mx-auto'>
                    <div className='flex gap-2 items-center justify-between py-3'>
                        {data.map((n, index) => {
                            return (
                                <Link key={index} className='text-[13px] flex gap-1.5 items-center' href={`/category/${n.slug}`}>
                                    <span>{n.icon}</span>
                                    <span className='font-bold'>{n.nameBn}</span>
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
