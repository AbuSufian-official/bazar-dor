import Link from 'next/link';
import React from 'react'
import MarqueeText from "react-marquee-text"

async function Marquee() {

    let products = [];
    try {
        let dataFetch = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
        let deta = await dataFetch.json();
        products = Array.isArray(deta) ? deta : [];
    } catch {
        products = [];
    }

    return (
        <div className='border-y py-2 border-[#E1E8E1] bg-white/70 overflow-hidden'>
            <MarqueeText duration={30}
                pauseOnHover={true}
                direction="right">
                <div className='flex gap-6 sm:gap-10 text-xs sm:text-sm items-center'>
                    {products.map((n, index) => {
                        const isDown = n?.change?.dir === "down" || Number(n?.change?.pct) < 0;
                        return (
                            <Link key={index} href={`/details/${n.id}`} className="hover:text-emerald-700 transition-colors shrink-0">
                                <div className="flex items-center gap-1.5 font-medium">
                                    <span>{n.categoryIcon}</span>
                                    <span>{n.nameBn}</span>
                                    <span className="text-gray-900 font-semibold">{n.today} টাকা/{n.unit}</span>
                                    <span className={`inline-flex items-center text-xs font-bold ${isDown ? "text-green-600" : "text-red-600"}`}>
                                        {isDown ? "▼" : "▲"}{Math.abs(Number(n?.change?.pct || 0))}%
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </MarqueeText>
        </div>
    )
}

export default Marquee
