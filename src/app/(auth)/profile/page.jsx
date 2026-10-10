"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function UserProfile() {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    let handelSingOut = async () => {
        await authClient.signOut()
    }

    return (
        <div className="min-h-screen bg-[#F3F6F3] p-4 sm:p-6 md:p-8 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* Header Title & Subtitle */}
                <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        আমার প্রোফাইল
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        {/* Avatar Image Container */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100 relative">
                            <Image
                                src={session?.user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256"}
                                alt={session?.user?.name || "প্রোফাইল ছবি"}
                                width={80}
                                height={80}
                                unoptimized
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name & Email */}
                        <div className="space-y-0.5">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                {session?.user?.name || "অতিথি ব্যবহারকারী"}
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                {session?.user?.email || "কোনো ইমেইল পাওয়া যায়নি"}
                            </p>
                        </div>
                    </div>

                    {/* Sign Out Button or Sign In Button */}
                    {session?.user ? (
                        <button
                            onClick={handelSingOut}
                            type="button"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 text-xs sm:text-sm font-semibold rounded-xl transition-colors shrink-0 cursor-pointer"
                        >
                            <span>↩</span>
                            <span>সাইন আউট</span>
                        </button>
                    ) : (
                        <Link
                            href="/singIn"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#008A45] hover:bg-[#007339] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shrink-0"
                        >
                            <span>সাইন ইন করুন</span>
                        </Link>
                    )}
                </div>

                {/* Info Form Card */}
                <form>
                    <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-100/80 shadow-sm space-y-5">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">
                            তথ্য
                        </h3>

                        <div className="space-y-4 max-w-2xl">
                            {/* Name Input Field */}
                            <div className="space-y-1.5">
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                                    নাম
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3.5 py-2.5 bg-[#FAFBF9] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                                />
                            </div>

                            {/* Update Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#008A45] hover:bg-[#007339] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-1"
                            >
                                আপডেট
                            </button>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
}
export default UserProfile;