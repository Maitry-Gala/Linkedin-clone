import CreatePostBox from "./CreatePostBox";

export default function MiddleFeed() {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <CreatePostBox
                avatarUrl="https://i.pravatar.cc/150?img=3"
                name="John Doe"
            />
        </div>
    );
}


