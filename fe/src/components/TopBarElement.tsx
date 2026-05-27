import type { ElementType } from "react";

interface TopBarProps {
    title: string;
    icon: ElementType;
}
export default function TopBarElement ({title,icon:Icon}:TopBarProps){
    return(
        <div className="flex flex-col items-center gap-1 px-2 py-2 w-20 rounded-lg cursor-pointer group rounded-lg hover:bg-gray-100">
            <Icon className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
            <h3 className="text-xs font-medium text-gray-500 group-hover:text-black transition-colors whitespace-nowrap">
                {title}
            </h3>
        </div>
    )
}