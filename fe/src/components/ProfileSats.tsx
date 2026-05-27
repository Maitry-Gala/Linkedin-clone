interface ProfileStatsProps {
    profileViews: number;
    postImpressions: number;
}

export default function ProfileStats({ profileViews, postImpressions }: ProfileStatsProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 mt-1 ">
            <StatRow label="Profile viewers" value={profileViews} />
            <StatRow label="Post impressions " value={postImpressions} />
        </div>
    );
}

interface StatRowProps {
    label: string;
    value: number;
}

function StatRow({ label, value }: StatRowProps) {
    return (
        <div className="flex justify-between items-center py-1.5 cursor-pointer group">
            <span className="text-[10px] text-black font-medium group-hover:cursor-pointer">{label}</span>
            <span className="text-[10px] font-semibold text-[#0a66c2]">{value}</span>
        </div>
    );
}