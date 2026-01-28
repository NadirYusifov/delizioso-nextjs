import ChefSection from "@/pages/home/chefsection";
import CustomersSection from "@/pages/home/customerssetion";
import HeroSection from "@/pages/home/herosection";
import PopularMenu from "@/pages/home/popularmenu";
import ReserveSection from "@/pages/home/reservesection";
import WelcomeSection from "@/pages/home/welcomesection";
import WorkSection from "@/pages/home/worksection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <PopularMenu />
      <ReserveSection />
      <ChefSection />
      <CustomersSection />
      <WorkSection />
    </main>
  );
}
