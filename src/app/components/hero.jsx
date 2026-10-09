import Image from "next/image";

const Hero = () => {
  return (
    <section className="container px-2 mx-auto w-full sm:px-2 lg:px-2 py-4">
      <div className="mx-auto flex flex-col md:flex-row min-h-[150px] max-w-7xl items-center overflow-hidden rounded-2xl border border-[#e4ebe5] bg-[#f9fbf9] px-4 py-5 shadow-sm sm:px-7 md:px-10 lg:px-12">
        
        {/* Left Content */}
        <div className="w-full md:w-[65%] lg:w-[68%]">
          
          {/* Badge */}
          <span className="inline-flex rounded-full bg-[#e4f2e8] px-3 py-1 text-[9px] font-medium text-[#087f3e] sm:text-[10px]">
            শুক্রবার, ৯ অক্টোবর, ২০২৬
          </span>

          {/* Heading */}
          <h1 className="mt-2 text-xl font-bold leading-tight text-[#26332c] sm:text-2xl md:text-3xl lg:text-[32px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-[600px] text-[9px] leading-relaxed text-[#68716c] sm:text-[10px] md:text-[11px]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য নিত্যপণ্যের
            দাম — বাজারভিত্তিক বিবরণ, তথ্য, তুলনা-সহ আজকের বাজারের সর্বশেষ
            আপডেট।
          </p>

          {/* Button */}
          <button
            type="button"
            className="mt-4 rounded-md bg-[#008f46] px-4 py-2 text-[9px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#00783b] hover:shadow-md sm:px-5 sm:py-2.5 sm:text-[10px]"
          >
            সব দাম দেখুন
          </button>
        </div>

        <Image src="/bazar-hero.png" width={300} height={300}></Image>

        {/* Mobile Illustration */}
        <div className="hidden sm:block md:hidden">
          <div className="ml-3 h-[80px] w-[90px] rounded-full bg-[#e5eae6]" />
        </div>

      </div>
    </section>
  );
};

export default Hero;