"use client"
import React, { useState } from 'react'
import SMcard from '@/app/components/smallCard';
import Image from 'next/image';
import Filtter from '@/app/components/categoryfiter';
function CategoryBody({ products }) {


    const categoryIcon = products[0]?.categoryIcon || "🏷️";
    const categoryName = products[0]?.categoryNameBn || categoryid;


    let [types, settypes] = useState(products)

    function handelShort(a) {

        if (a == "loww") {
            let a = [...products]
            let b = a.sort((a, b) => a.today - b.today)
            settypes(b)
        }
        if (a == "high") {
            let x = [...products]
            let y = x.sort((a, b) => b.today - a.today)
            settypes(y)
        }
        if (a == "default") {
            let p = [...products]

            settypes(p)
        }

    }


















    return (
        <section className='my-4 sm:my-6'>
            <div className='container px-2 mx-auto'>

                <div className='bg-white py-4 px-4 sm:px-6 border rounded-2xl border-[#E1E8E1] shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                    <div className='flex items-center gap-2.5'>
                        <span className='text-2xl sm:text-3xl p-2 bg-[#f0f5f0] rounded-xl'>{categoryIcon}</span>
                        <div>
                            <h1 className='font-extrabold text-xl sm:text-2xl text-[#1D271F]'>{categoryName}</h1>
                            <p className='text-[#616e63] text-xs sm:text-sm mt-0.5'>{types.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                        </div>
                    </div>
                </div>

                <div>







                    <div className='px-4 sm:px-6 my-4 sm:my-6 text-xs sm:text-sm flex items-center justify-between sm:justify-end gap-3 py-3 sm:py-4 bg-white border border-[#E1E8E1] rounded-2xl shadow-xs'>
                        <span className='text-[#1D271F] font-semibold'>
                            সাজান:
                        </span>
                        <div className='text-black w-36 sm:w-44'>
                            <select onChange={(e) => handelShort(e.target.value)} defaultValue="default" className="text-black select select-sm w-full text-xs sm:text-sm border-gray-200 bg-gray-50/60 rounded-xl">
                                <option className='text-black' value="default">ডিফল্ট</option>
                                <option className='text-black' value="loww">দাম: কম থেকে বেশি</option>
                                <option className='text-black' value="high">দাম: বেশি থেকে কম</option>
                            </select>
                        </div>
                    </div>





























                    {/* <Filtter deta={products} /> */}


                </div>

                {types.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4'>
                        {types.map((deta, index) => {
                            return (<SMcard key={index} deta={deta} />)
                        })}
                    </div>
                ) : (
                    <div className='bg-white rounded-2xl border border-[#E1E8E1] p-10 text-center text-gray-500'>
                        <p className='text-sm sm:text-base'>এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>
                    </div>
                )}

            </div>
        </section>
    )
}

export default CategoryBody
