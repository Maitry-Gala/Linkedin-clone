// export default function PremiumBadge(){
//     return(
//         <div className=" flex flex-col items-center bg-white rounded-lg border border-gray-200 px-2 py-3 mt-2">
//             <p className="text-[8px] text-gray-500 hover:cursor-pointer">
//                 Stand out to recruiters with jobs personalized for you
//             </p>
//             <p className="text-black text-[10px] pt-2 font-medium hover: cursor-pointer ">
//                 Try Premium for ₹0
//             </p>
//         </div>
//     )
// }
export default function PremiumBadge() {
    return (
        <div className="flex flex-col bg-white rounded-lg border border-gray-200 px-4 py-2 gap-1 mt-1">
            <p className="text-[10px] text-gray-500 leading-snug">
                Stand out to recruiters with jobs personalized for you
            </p>
            <p className="text-[10px] font-semibold text-black hover:underline cursor-pointer">
                Try Premium for ₹0
            </p>
        </div>
    );
}