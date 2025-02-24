import { HeroSection } from "@/widgets/sections/hero-section";
import Providers from "@/shared/ui/ThemeProvider/ThemeProvider";

export default function Home() {
  return (
    <Providers>
      <HeroSection />
    </Providers>
  );
}
