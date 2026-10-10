
export default function Loading() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
            {/* Loading Spinner */}
            <div className="relative flex h-16 w-16 items-center justify-center">
                <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />

                <div className="h-6 w-6 animate-pulse rounded-full bg-green-600" />
            </div>

            {/* Bangla Text */}
            <h2 className="mt-8 text-xl font-bold text-gray-800 sm:text-2xl">
                একটু অপেক্ষা করুন...
            </h2>

            <p className="mt-3 text-center text-sm text-gray-500 sm:text-base">
                আপনার পেজটি লোড হচ্ছে। অনুগ্রহ করে অপেক্ষা করুন।
            </p>

            {/* Loading Dots */}
            <div className="mt-6 flex items-center gap-2">
                <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-green-600" />
            </div>
        </main>
    );
}
