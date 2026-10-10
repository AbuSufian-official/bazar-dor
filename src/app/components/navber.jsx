"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { authClient } from '@/lib/auth-client';
import { router } from 'better-auth/api';
import { use } from 'react';

function Navber() {
    let time = new Date().toLocaleDateString("bn-BD", {
        dateStyle: 'full'
    })
    let handelSingOut = async () => {
        await authClient.signOut()
    }
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    










    return (
        <>
            <header>
                <nav className='container px-2  mx-auto'>
                    <div className='py-2 flex items-center justify-between'>
                        <Link href="/">
                            <div className='flex  gap-2 '>
                                <Image
                                    className='bg-green-700 p-2 rounded-[10px]'
                                    src='/logo-icon.png' alt='logo' width={35} height={30}></Image>
                                <div>
                                    <h2 className='font-bold text-[18px]'>বাজার দর</h2>
                                    <p className='text-[10px]'>{time}</p>
                                </div>
                            </div>
                        </Link>

                        <div className='flex items-center gap-2'>
                            <div className='w-9 h-9 border border-[#e7e7e7] rounded-[50px] flex items-center justify-center'>
                                <Image src='/bazar-hero.png' alt='profile-pic' width={30} height={30}></Image>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button"
                                    className="btn p-0 hover:shadow-none bg-transparent border-0 m-1">Click  ⬇️</div>

                                <div tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    {Boolean(session?.user) ? (<div>
                                        <p>{session?.user?.name}</p>
                                        <p>{session?.user?.email}</p>
                                        </div>) : ""}
                                    <div>
                                        <ul>
                                            {Boolean(session?.user) ? (<div>
                                                <li><Link href='/profile'><FaUser /> আমার প্রোফাইল</Link></li>
                                                <li>
                                                    <button className='text-red-600' onClick={handelSingOut}><BsArrowReturnLeft /> সাইন আউট</button>
                                                </li>

                                            </div>) : (
                                                <div>
                                                    <li><Link href='/singUp'>সাইন আপ</Link></li>
                                                    <li><Link href='/singIn'>সাইন ইন</Link></li>

                                                </div>
                                            )}



                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navber
