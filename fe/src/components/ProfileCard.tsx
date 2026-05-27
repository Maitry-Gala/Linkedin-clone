interface ProfileCardProps {
    bannerUrl: string;
    avatarUrl: string;
    name: string;
    title: string;
    location: string;
}

export default function ProfileCard({
    bannerUrl,
    avatarUrl,
    name,
    title,
    location,
}: ProfileCardProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden ">
            <div className="h-14 bg-cover bg-center" style={{ backgroundImage: `url(${bannerUrl})` }} />

            <div className="px-4 pb-3">
                <div className="-mt-7 mb-2">
                    <img
                        src={avatarUrl}
                        alt={name}
                        className="w-14 h-14 rounded-full border-2 border-white object-cover"
                    />
                </div>

                {/* Info */}
                <h2 className="text-sm font-semibold text-gray-900 hover: cursor-pointer">
                    {name}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{location}</p>
            </div>
        </div>
    );
}