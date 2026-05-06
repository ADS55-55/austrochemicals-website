import { HomeHero } from "@/components/marketing/HomeHero";
import { AchievementsGlowingStats } from "@/components/marketing/AchievementsGlowingStats";
import { HomePageSections } from "@/components/marketing/HomePageSections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AchievementsGlowingStats />
      <HomePageSections />
    </>
  );
}
