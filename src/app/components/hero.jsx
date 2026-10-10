import Image from "next/image";

const Hero = () => {
  return (
    <section className="container px-2 mx-auto w-full sm:px-2 lg:px-2 py-4">
      <div className="mx-auto flex flex-col md:flex-row min-h-[150px] max-w-7xl items-center overflow-hidden rounded-2xl border border-[#e4ebe5] bg-[#f9fbf9] px-4 py-5 shadow-sm sm:px-7 md:px-10 lg:px-12">
        
        {/* Left Content */}
        <div className="w-full md:w-[65%] lg:w-[68%] flex flex-col items-start text-left">
          
          {/* Badge */}
          <span className="inline-flex rounded-full bg-[#e4f2e8] px-3 py-1 text-xs font-semibold text-[#087f3e]">
            বাজার দর আপডেট
          </span>

          {/* Heading */}
          <h1 className="mt-2.5 text-xl font-extrabold leading-tight text-[#26332c] sm:text-2xl md:text-3xl lg:text-[32px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="mt-2.5 max-w-[600px] text-xs sm:text-sm leading-relaxed text-[#556059]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য নিত্যপণ্যের
            দাম — বাজারভিত্তিক বিবরণ, তথ্য, তুলনা-সহ আজকের বাজারের সর্বশেষ
            আপডেট।
          </p>

          {/* Button */}
          <a
            href="#all-products"
            className="mt-4 inline-flex items-center rounded-xl bg-[#008f46] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#00783b] hover:shadow-md cursor-pointer"
          >
            সব দাম দেখুন
          </a>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-[35%] lg:w-[32%] flex justify-center mt-5 md:mt-0">
          <Image 
            src="/bazar-hero.png" 
            alt="আজকের বাজার দর" 
            width={300} 
            height={300}
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[290px] h-auto object-contain drop-shadow-sm"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;