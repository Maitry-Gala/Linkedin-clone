import { Link } from "react-router-dom";
import type { ElementType } from "react";

interface NavLinkItemProps {
    label: string;
    icon: ElementType;
    to: string;
}

export default function NavLinkItem({ label, icon: Icon, to }: NavLinkItemProps) {
    return (
        <Link
            to={to}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 group"
        >
            <Icon className="w-3 h-3 text-black " />
            <span className="text-[10px] font-medium text-black">
                {label}
            </span>
        </Link>
    );
}