import { Bell, Briefcase, Home, MessageSquareMore, Network } from "lucide-react";
import SearchBar from "./SearchBar";
import TopBarElement from "./TopBarElement";


export default function TopBar() {
    return (
        <div className="border-b border-gray-200 sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center px-4 py-1 max-w-6xl mx-auto">
                <div className="flex items-center gap-1.5">
                    <img src="https://www.svgrepo.com/show/157006/linkedin.svg" className="w-7 h-7 cursor-pointer" />
                    <SearchBar onSearch={(q) => console.log("searching:", q)} placeholder="Search" />
                </div>
                <div className="flex items-center">
                    <TopBarElement title="Home" icon={Home} />
                    <TopBarElement title="Network" icon={Network} />
                    <TopBarElement title="Jobs" icon={Briefcase} />
                    <TopBarElement title="Messaging" icon={MessageSquareMore} />
                    <TopBarElement title="Notifications" icon={Bell} />
                </div>
            </div>
        </div>
    );
}