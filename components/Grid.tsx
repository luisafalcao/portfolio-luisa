export default function Grid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="min-w-40 min-h-36 bg-slate-100 p-5 flex justify-center items-center">abc</div>
            <div className="min-w-40 min-h-36 bg-slate-200 p-5">abc</div>
            <div className="min-w-40 min-h-36 bg-slate-300 p-5">abc</div>
            <div className="min-w-40 min-h-36 bg-slate-400 p-5">abc</div>
            <div className="min-w-40 min-h-36 bg-slate-500 p-5">abc</div>
            <div className="min-w-40 min-h-36 bg-slate-600 p-5">abc</div>

        </div>
    )
}