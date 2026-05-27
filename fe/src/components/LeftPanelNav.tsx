import { Bookmark, Calendar, Users } from "lucide-react";
import NavLinkItem from "./NavLinkItem";

const links = [
    { label: "Groups", icon: Users, to: "/groups" },
    { label: "Events", icon: Calendar, to: "/events" },
    { label: "Saved Items", icon: Bookmark, to: "/saved" },
];

export default function LeftPanelNav() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 px-2 py-3 mt-1">
            {links.map((link) => (
                <NavLinkItem key={link.label} {...link} />
            ))}
        </div>
    );
}