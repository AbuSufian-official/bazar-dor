"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { authClient } from '@/lib/auth-client';
import { useSyncExternalStore } from 'react';
import toast from 'react-hot-toast';

const emptySubscribe = () => () => {};
const getClientDate = () => new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' });
const getServerDate = () => "";

function Navber() {
    const time = useSyncExternalStore(emptySubscribe, getClientDate, getServerDate);

    let handelSingOut = async () => {
        await authClient.signOut()
        const notify = () => toast.success('আপনার অ্যাকাউন্ট সফল ভাবেসাইন আউট হয়েছ।' );
        notify()
    }
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()


    return (
        <header className='bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#E1E8E1]'>
            <nav className='container px-2 sm:px-4 mx-auto'>
                <div className='py-2.5 flex items-center justify-between gap-2'>
                    <Link href="/" className="group">
                        <div className='flex items-center gap-2.5'>
                            <div className='bg-[#008A45] p-2 rounded-xl flex items-center justify-center shrink-0 shadow-xs'>
                                <Image
                                    src='/logo-icon.png' 
                                    alt='logo' 
                                    width={28} 
                                    height={28}
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                            <div>
                                <h2 className='font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight'>বাজার দর</h2>
                                <p className='text-[10px] sm:text-xs text-gray-500 font-medium whitespace-nowrap'>{time || "আজকের দর"}</p>
                            </div>
                        </div>
                    </Link>

                    <div className='flex items-center gap-2'>
                        <div className="dropdown dropdown-end">
                            <div 
                                tabIndex={0} 
                                role="button"
                                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full    hover:bg-gray-50 transition cursor-pointer"
                            >
                                <div className='w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center overflow-hidden shrink-0 border border-emerald-100'>
                                    <Image src='/bazar-hero.png' alt='profile-pic' width={24} height={24} className="object-contain" />
                                </div>
                                <span className="text-xs font-semibold text-gray-700 hidden sm:inline">
                                    {session?.user ? session.user.name?.split(" ")[0] : "অ্যাকাউন্ট"}
                                </span>
                                <span className="text-xs text-gray-400">▾</span>
                            </div>

                            <div tabIndex={-1} className="dropdown-content menu bg-white rounded-2xl z-50 w-56 p-3 shadow-xl border border-gray-100 mt-2">
                                {Boolean(session?.user) && (
                                    <div className="pb-2.5 mb-2 border-b border-gray-100 px-2">
                                        <p className="font-bold text-sm text-gray-800 truncate">{session?.user?.name}</p>
                                        <p className="text-xs text-gray-500 truncate">{session?.user?.email}</p>
                                    </div>
                                )}
                                <ul className="space-y-1">
                                    {Boolean(session?.user) ? (
                                        <>
                                            <li>
                                                <Link href='/profile' className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 rounded-xl hover:bg-emerald-50 hover:text-emerald-700">
                                                    <FaUser className="text-emerald-600" /> আমার প্রোফাইল
                                                </Link>
                                            </li>
                                            <li>
                                                <button 
                                                    onClick={handelSingOut}
                                                    
                                                    className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-rose-600 rounded-xl hover:bg-rose-50"
                                                >
                                                    <BsArrowReturnLeft /> সাইন আউট
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link href='/singIn' className="px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 rounded-xl hover:bg-emerald-50 hover:text-emerald-700">
                                                    সাইন ইন
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/singUp' className="px-3 py-2 text-xs sm:text-sm font-semibold text-[#008A45] rounded-xl hover:bg-emerald-50">
                                                    সাইন আপ
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navber
