import Link from "next/link";

const SMcard = ({ deta }) => {
  if (!deta) return null;
  const isDown = deta?.change?.dir === "down" || Number(deta?.change?.pct) < 0;
  const pct = deta?.change?.pct !== undefined ? Math.abs(Number(deta.change.pct)) : "0";

  return (
    <Link href={`/details/${deta.id}`} className="block h-full group">
      <div className="w-full h-full rounded-2xl border border-[#e1e8e2] bg-[#f9fbf9] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-200 flex flex-col justify-between">

        {/* Top Section */}
        <div className="flex items-start justify-between gap-2">
          {/* Product */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Image / Emoji */}
            <span className="text-2xl sm:text-3xl shrink-0 p-2 bg-[#f0f5f0] rounded-xl">{deta.image || "🛒"}</span>

            {/* Product Name */}
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-[#202a24] sm:text-[15px] truncate group-hover:text-emerald-800 transition-colors">
                {deta.nameBn}
              </h3>
              <p className="mt-0.5 text-xs text-[#69736d]">
                প্রতি {deta.unit}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-2 border-t border-gray-100 flex items-end justify-between">
          {/* Price */}
          <div>
            <p className="text-[11px] text-[#66706a]">
              আজকের দাম
            </p>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-xl font-extrabold leading-none text-[#202a24] sm:text-[22px]">
                {deta.today}
              </span>
              <span className="text-xs font-semibold text-[#303a34]">
                টাকা
              </span>
            </div>
          </div>

          {/* Price Change */}
          <div className={`rounded-xl px-2.5 py-1.5 ${isDown ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
            <span className="text-[11px] sm:text-xs font-bold inline-flex items-center gap-0.5">
              {isDown ? "▼" : "▲"} {pct}%
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default SMcard;