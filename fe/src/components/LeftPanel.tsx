import LeftPanelNav from "./LeftPanelNav";
import PremiumBadge from "./PremiumBadge";
import ProfileCard from "./ProfileCard";
import ProfileStats from "./ProfileSats";


export default function LeftPanel() {
  return (
    <aside className="w-46 shrink-0 mt-4">
      <ProfileCard
        bannerUrl="https://picsum.photos/seed/banner/400/100"
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThghxtxb8aHViSpJAdS_SYkqmdHGlEXiuxQCgiRp2kFw&s"
        name="Mitsy Jenner"
        title="Frontend Developer at Acme Corp"
        location="Mumbai, Maharashtra"
      />
      <PremiumBadge/>
      <ProfileStats profileViews={142} postImpressions={1893} />
       <LeftPanelNav /> 
       
    </aside>
  );
}
