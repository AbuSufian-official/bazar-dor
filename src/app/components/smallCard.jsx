import Image from "next/image";
import Link from "next/link";

const SMcard = ({ deta }) => {
  return (
    <Link href={`/details/${deta.id}`}>
      <div className="w-full max-w-[330px] rounded-2xl border border-[#e1e8e2] bg-[#f9fbf9] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:max-w-[350px]">

        {/* Top Section */}
        <div className="flex items-center justify-between">

          {/* Product */}
          <div className="flex items-center gap-3">

            {/* Image */}
            <span>{deta.image}</span>


            {/* Product Name */}
            <div>
              <h3 className="text-sm font-bold text-[#202a24] sm:text-[15px]">
                {deta.nameBn}
              </h3>

              <p className="mt-0.5 text-[10px] text-[#69736d] sm:text-[11px]">
                প্রতি {deta.unit}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-5 flex items-end justify-between">

          {/* Price */}
          <div>
            <p className="text-[10px] text-[#66706a] sm:text-[11px]">
              আজকের দাম
            </p>

            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-xl font-bold leading-none text-[#202a24] sm:text-[22px]">
                {deta.today}
              </span>

              <span className="text-xs font-medium text-[#303a34]">
                টাকা
              </span>
            </div>
          </div>

          {/* Price Change */}
          <div className="rounded-xl bg-[#edf4ee] px-3 py-2">
            <span className={`text-[10px] font-bold ${Number(deta.change["pct"]) < 0 ? "text-green-600" : "text-red-600"} sm:text-[11px]`}>
              ▲ {deta.change["pct"]}%
            </span>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default SMcard;