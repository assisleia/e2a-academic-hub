import { HeroSection } from "@/components/sections/HeroSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { AcademicModelSection } from "@/components/sections/AcademicModelSection";
import { FormationSection } from "@/components/sections/FormationSection";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CurriculumSection />
      <AcademicModelSection />
      <FormationSection />
      <MaterialsSection />
      <SupportSection />
      <Footer />
    </div>
  );
}