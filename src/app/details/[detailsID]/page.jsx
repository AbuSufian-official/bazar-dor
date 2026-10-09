import React from 'react';

async function ProductDetails({ params }) {
    let { detailsID } = await params
    let fetchDeta = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${detailsID}`)
    let deta = await fetchDeta.json();

    return (
        <div className="min-h-screen bg-[#F3F6F3] p-3 sm:p-6 md:p-8 font-sans text-gray-800 dir-ltr">
            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">

                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium overflow-x-auto whitespace-nowrap">
                    <span>হোম</span>
                    <span>&gt;</span>
                    <span>{deta.categoryNameBn}</span>
                    <span>&gt;</span>
                    <span className="text-gray-700">{deta.nameBn}</span>
                </nav>

                {/* Header Hero Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                        {/* Rice Icon Container */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F0F5F0] flex items-center justify-center shrink-0 border border-gray-100">
                            <span className="text-3xl">🍚</span>
                        </div>

                        {/* Title & Metadata */}
                        <div className="space-y-1">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                                {deta.nameBn}
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-500">
                                প্রতি কেজি · চাল
                            </p>
                            <p className="text-xs sm:text-sm font-medium text-gray-600">
                                গতকালকের তুলনায় আজ দাম <span className="font-bold text-gray-900">বেড়েছে - {Number(deta.today) - Number(deta.yesterday)} টাকা</span>
                            </p>
                        </div>
                    </div>

                    {/* Today's Price Badge */}
                    <div className="bg-[#F6F8F6] rounded-xl p-4 text-center md:min-w-[160px] border border-gray-100 shrink-0">
                        <div className="text-xs text-gray-500 font-medium">আজকের দাম</div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 my-0.5">{deta.today}</div>
                        <div className="text-xs text-gray-500 font-medium mb-1">টাকা / {deta.unit}</div>
                        <div className={`inline-flex items-center ${deta.change["dir"] == "up" ? "text-red-600" : "text-green-600"} text-xs font-bold  bg-red-50 px-2 py-0.5 rounded-full`}>
                            {deta.change["dir"] == "up" ? "▲" : "▼"}{deta.change["pct"]}%
                        </div>
                    </div>
                </div>

                {/* Main Content Card Container */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100/80 shadow-sm space-y-6">

                    {/* Summary Section */}
                    <section className="space-y-3">
                        <h2 className="text-base sm:text-lg font-bold text-gray-900">
                            দামের সারসংক্ষেপ
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            {/* Lowest Price */}
                            <div className="bg-[#FAFBF9] rounded-xl p-4 border border-gray-100 space-y-1">
                                <div className="text-xs sm:text-sm text-gray-500 font-medium">সর্বনিম্ন দাম</div>
                                <div className="text-xl sm:text-2xl font-bold text-emerald-600">৫৯ টাকা</div>
                                <div className="text-xs text-gray-500">সবচেয়ে কম পাওয়া যাচ্ছে</div>
                            </div>

                            {/* Highest Price */}
                            <div className="bg-[#FAFBF9] rounded-xl p-4 border border-gray-100 space-y-1">
                                <div className="text-xs sm:text-sm text-gray-500 font-medium">সর্বাধিক দাম</div>
                                <div className="text-xl sm:text-2xl font-bold text-red-500">৭৩ টাকা</div>
                                <div className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</div>
                            </div>

                            {/* Average Price */}
                            <div className="bg-[#FAFBF9] rounded-xl p-4 border border-gray-100 space-y-1">
                                <div className="text-xs sm:text-sm text-gray-500 font-medium">গড় দাম</div>
                                <div className="text-xl sm:text-2xl font-bold text-emerald-600">৬৬ টাকা</div>
                                <div className="text-xs text-gray-500">প্রতি কেজি-এর হিসাবে</div>
                            </div>
                        </div>
                    </section>

                    {/* Market-wise Today's Price Section */}
                    <section className="space-y-3">
                        <h2 className="text-base sm:text-lg font-bold text-gray-900">
                            বাজারভিত্তিক আজকের দাম
                        </h2>

                        {/* Table wrapper for mobile horizontal scroll */}
                        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                            <table className="w-full text-left text-xs sm:text-sm border-separate border-spacing-y-1 min-w-[500px]">
                                <thead>
                                    <tr className="text-gray-500 font-medium">
                                        <th className="py-2 px-3 font-semibold">বাজার</th>
                                        <th className="py-2 px-3 font-semibold">বিভাগ</th>
                                        <th className="py-2 px-3 font-semibold text-center">সর্বনিম্ন</th>
                                        <th className="py-2 px-3 font-semibold text-center">সর্বাধিক</th>
                                        <th className="py-2 px-3 font-semibold text-right">গড়</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100/60">
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">মার্চ বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">ময়মনসিংহ</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৫৯ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬২ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬২ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">সদর বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">রাজশাহী</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬০ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৬ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৩ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">বাগেরহাট</td>
                                        <td className="py-3 px-3 text-gray-600">খুলনা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬০ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬২ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬১.৫০ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">সাহেববাজার বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">রাজশাহী</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬০ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৮ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৪ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">মেছ বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">ময়মনসিংহ</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬০ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৬ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৪.৫০ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">আমতলীয় বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">চট্টগ্রাম</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬০ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৯ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৫ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">ডবলসেট বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">খুলনা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬২ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৯ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৫.৫০ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">কদমতলী বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">সিলেট</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৩ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৭৫ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৭ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">গ্রীন মার্কেট, মিরপুর</td>
                                        <td className="py-3 px-3 text-gray-600">ঢাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৪ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৭৬ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৭.৫০ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">চৌধুরী বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">চট্টগ্রাম</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৩ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৭৩ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৮ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">আম্বারখানা</td>
                                        <td className="py-3 px-3 text-gray-600">সিলেট</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬৪ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৭৩ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৮.৫০ টাকা</td>
                                    </tr>
                                    <tr className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                        <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">কারওয়ান বাজার</td>
                                        <td className="py-3 px-3 text-gray-600">ঢাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৬২ টাকা</td>
                                        <td className="py-3 px-3 text-center text-gray-700 font-medium">৭৩ টাকা</td>
                                        <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">৬৯ টাকা</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
export default ProductDetails;