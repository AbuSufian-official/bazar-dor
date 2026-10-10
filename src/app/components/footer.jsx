import React from 'react'

function Footer() {
    return (
        <footer className='mt-auto border-t border-[#E1E8E1] bg-[#FAFCFA]'>
            <div className='text-[#334237] text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 container px-4 mx-auto py-5 text-center sm:text-left'>
                <p className="font-medium">বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p className="text-gray-500 text-[11px] sm:text-xs">সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </footer>
    )
}

export default Footer
