"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';

function SignUp() {
    let [check, setCheck] = useState(true)
    let handelSubmit = async (e) => {
        e.preventDefault();
        if ((e.target[3].value == e.target[2].value) === false) {
            setCheck(false)
            return
        }
        setCheck(true)
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            callbackURL: process.env.BETTER_AUTH_URL,
        });
        console.log(data, error)


    }
    async function handelGoogleSingin() {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        
    }

    return (
        <div className='container px-2 mx-auto'>
            <form onSubmit={handelSubmit}>

                <div className="min-h-screen bg-[#f3f6f3] flex flex-col items-center justify-center p-4 text-gray-800">

                    {/* Header Section */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            অ্যাকাউন্ট তৈরি করুন
                        </h1>
                        <p className="text-sm text-gray-600">
                            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                        </p>
                    </div>

                    {/* Main Form Card */}
                    <div className="bg-white w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">


                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                নাম
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="যেমন: রহিম উদ্দিন"
                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-gray-400 bg-gray-50/50"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                ইমেইল
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-gray-400 bg-gray-50/50"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                পাসওয়ার্ড
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"

                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-gray-400 bg-gray-50/50"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>
                            <input
                                name='confirmpassword'
                                type="password"
                                placeholder="আবার লিখুন"
                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-gray-400 bg-gray-50/50"
                            />
                            <p className={check ? `hidden` : `block text-red-600`} >আপনি ভুল পাসওয়ার্ড লিখেছেন।</p>
                        </div>

                        {/* Submit Button */}
                        <button

                            type="submit"
                            className="w-full mt-2 py-3 bg-[#008744] hover:bg-[#00753a] text-white font-medium rounded-lg text-sm transition-colors shadow-sm"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>


                        {/* Divider */}
                        <div className="relative my-6 flex items-center justify-center">
                            <div className="border-t border-gray-200 w-full"></div>
                            <span className="bg-white px-3 text-xs text-gray-500 absolute">
                                অথবা
                            </span>
                        </div>

                        {/* Social Signup Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Google Button */}
                            <button
                                onClick={handelGoogleSingin}
                                type="button"
                                className="flex items-center justify-center gap-2 py-2.5 px-3 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                    />
                                </svg>
                                <span>Google দিয়ে চালিয়ে যান</span>
                            </button>

                            {/* GitHub Button */}
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-2.5 px-3 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-4 h-4 fill-current text-gray-800" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                <span>GitHub দিয়ে চালিয়ে যান</span>
                            </button>
                        </div>

                        {/* Existing Account Link */}
                        <div className="mt-6 text-center text-xs text-gray-600">
                            অ্যাকাউন্ট আছে?{' '}
                            <Link href="/singIn" className="text-[#008744] font-semibold hover:underline">
                                সাইন ইন করুন
                            </Link>
                        </div>
                    </div>

                    {/* Back to Home Link */}
                    <div className="mt-6 text-center">
                        <Link href="/" className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
                            <span>←</span> হোম পেজে ফিরে যান
                        </Link>
                    </div>

                </div>



            </form>


        </div>

    );
}
export default SignUp

