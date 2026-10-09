import Link from 'next/link';
import React from 'react'
import MarqueeText from "react-marquee-text"

async function Marquee() {

    let dataFetch = await fetch("https://api.abcz.workers.dev/api/bazardor/products ");
    let deta = await dataFetch.json();
    return (
        <div className='border py-2 border-[#E1E8E1]'>
            <MarqueeText duration={30}
                pauseOnHover={true}
                direction="right">
                <div className='flex gap-10'>
                    {deta.map((n, index) => {
                        return (<Link key={index} href={`/details/${n.id}`}>

                            <div>
                                {n.categoryIcon} {n.nameBn} {n.today} টাকা/{n.unit} <span className={Number(n.change["pct"])<0 ? "text-green-600":"text-red-600"}>   {Number(n.change["pct"])<0 ? "▼":"▲"}{n.change["pct"]} %</span>
                            </div>
                        </Link>)
                    })}
                </div>

            </MarqueeText>
        </div>
    )
}

export default Marquee
