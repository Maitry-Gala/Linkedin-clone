import { Image, Video, Calendar } from "lucide-react";

interface CreatePostBoxProps {
    avatarUrl: string;
    name: string;
}

interface PostAction {
    label: string;
    icon: typeof Image;
    color: string;
}

const actions: PostAction[] = [
    { label: "Photo", icon: Image, color: "text-blue-500" },
    { label: "Video", icon: Video, color: "text-green-500" },
    { label: "Event", icon: Calendar, color: "text-amber-500" },
];

export default function CreatePostBox({ avatarUrl, name }: CreatePostBoxProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 flex flex-col gap-3">
            {/* Input row */}
            <div className="flex items-center gap-3">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <button className="flex-1 text-left text-sm text-gray-500 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
                    Start a post
                </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Action buttons */}
            <div className="flex items-center justify-around">
                {actions.map(({ label, icon: Icon, color }) => (
                    <button
                        key={label}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                        <Icon className={`w-5 h-5 ${color}`} />
                        <span className="text-xs font-medium text-gray-600 group-hover:text-black transition-colors">
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}