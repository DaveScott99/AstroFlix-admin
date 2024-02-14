export function Loading() {
    return (
        <div className='flex items-center justify-center w-full'>
           <button type="button" className="bg-blue-500 h-max w-max rounded-lg text-white font-bold hover:bg-blue-400 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                    <div className="ml-2">Processing...</div>
                </div>
           </button>
        </div>
    )
}