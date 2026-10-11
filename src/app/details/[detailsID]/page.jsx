import React from 'react';
import Link from 'next/link';

async function ProductDetails({ params }) {
    let { detailsID } = await params;
    let deta = null;
    try {
        let fetchDeta = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${detailsID}`);
        deta = await fetchDeta.json();
    } catch {
        deta = null;
    }

    if (!deta || deta.error) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
                <span className="text-4xl mb-3">🔍</span>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">পণ্যের তথ্য পাওয়া যায়নি</h1>
                <p className="text-sm text-gray-500 mt-1 mb-4">অনুগ্রহ করে আবার চেষ্টা করুন বা হোমপেজে ফিরে যান।</p>
                <Link href="/" className="px-4 py-2 bg-[#008A45] text-white font-medium text-sm rounded-xl hover:bg-[#007339] transition-colors">
                    হোমে ফিরে যান
                </Link>
            </div>
        );
    }

    const diff = Number(deta.today || 0) - Number(deta.yesterday || 0);
    const isUp = deta?.change?.dir === "up" || diff > 0;
    const diffText = isUp ? `বেড়েছে - ${Math.abs(diff)} টাকা` : diff < 0 ? `কমেছে - ${Math.abs(diff)} টাকা` : `অপরিবর্তিত`;
    const pct = deta?.change?.pct !== undefined ? Math.abs(Number(deta.change.pct)) : "0";

    const maxPrice = deta.markets.reduce((max, item) => {
        return item.max > max ? item.max : max;
    }, deta.markets[0].max);
    const minPrice = deta.markets.reduce((min, item) => {
        return item.min < min ? item.min : min;
    }, deta.markets[0].min);
    const averagePrice = deta.markets.reduce((total, item) => {
        return total + (item.min + item.max) / 2;
    }, 0) / deta.markets.length;




    return (
        <div className="min-h-screen bg-[#F3F6F3] p-3 sm:p-6 md:p-8 font-sans text-gray-800 dir-ltr">
            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">

                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium overflow-x-auto whitespace-nowrap">
                    <Link href="/" className="hover:text-emerald-700 transition-colors">হোম</Link>
                    <span>&gt;</span>
                    <span>{deta.categoryNameBn}</span>
                    <span>&gt;</span>
                    <span className="text-gray-700 font-semibold">{deta.nameBn}</span>
                </nav>

                {/* Header Hero Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                        {/* Dynamic Icon Container */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#F0F5F0] flex items-center justify-center shrink-0 border border-gray-100">
                            <span className="text-3xl">{deta.image || "🛒"}</span>
                        </div>

                        {/* Title & Metadata */}
                        <div className="space-y-1">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                                {deta.nameBn}
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-500">
                                প্রতি {deta.unit=="litre"?"লিটার":""}{deta.unit=="kg"?"কেজি ":""}{deta.unit=="dozen"?"ডজন":""}{deta.unit=="piece"?"পিস":""} · {deta.categoryNameBn}
                            </p>
                            <p className="text-xs sm:text-sm font-medium text-gray-600">
                                গতকালকের তুলনায় আজ দাম <span className="font-bold text-gray-900">{diffText}</span>
                            </p>
                        </div>
                    </div>

                    {/* Today's Price Badge */}
                    <div className="bg-[#F6F8F6] rounded-xl p-4 text-center md:min-w-[160px] border border-gray-100 shrink-0">
                        <div className="text-xs text-gray-500 font-medium">আজকের দাম</div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 my-0.5">{deta.today}</div>
                        <div className="text-xs text-gray-500 font-medium mb-1">টাকা / {deta.unit}</div>
                        <div className={`inline-flex items-center ${isUp ? "text-rose-600 bg-rose-50" : "text-emerald-600 bg-emerald-50"} text-xs font-bold px-2 py-0.5 rounded-full`}>
                            {isUp ? "▲" : "▼"} {pct}%
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
                                <div className="text-xl sm:text-2xl font-bold text-emerald-600">{minPrice} টাকা</div>
                                <div className="text-xs text-gray-500">সবচেয়ে কম পাওয়া যাচ্ছে</div>
                            </div>

                            {/* Highest Price */}
                            <div className="bg-[#FAFBF9] rounded-xl p-4 border border-gray-100 space-y-1">
                                <div className="text-xs sm:text-sm text-gray-500 font-medium">সর্বাধিক দাম</div>
                                <div className="text-xl sm:text-2xl font-bold text-red-500">{maxPrice} টাকা</div>
                                <div className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</div>
                            </div>

                            {/* Average Price */}
                            <div className="bg-[#FAFBF9] rounded-xl p-4 border border-gray-100 space-y-1">
                                <div className="text-xs sm:text-sm text-gray-500 font-medium">গড় দাম</div>
                                <div className="text-xl sm:text-2xl font-bold text-emerald-600">{Math.round(averagePrice)} টাকা</div>
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
                                    {deta.markets.map((n, index) => {
                                        return (
                                            <tr key={index}  className="bg-[#F9FAF8] hover:bg-gray-100/80 transition-colors rounded-lg">
                                                <td className="py-3 px-3 font-semibold text-gray-900 rounded-l-lg">{n.market}</td>
                                                <td className="py-3 px-3 text-gray-600">{n.division}</td>
                                                <td className="py-3 px-3 text-center text-gray-700 font-medium">{n.min} টাকা</td>
                                                <td className="py-3 px-3 text-center text-gray-700 font-medium">{n.max} টাকা</td>
                                                <td className="py-3 px-3 text-right font-bold text-gray-900 rounded-r-lg">{(Number(n.min) + Number(n.max)) / 2} টাকা</td>
                                            </tr>

                                        )
                                    })}
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