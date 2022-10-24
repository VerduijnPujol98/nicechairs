import { DoubleHero } from "./components/DoubleHero";
import { EmailBanner } from "./components/EmailBanner";
import { FeaturesCards } from "./components/FeaturesCard";
import { HeaderResponsive } from "./components/HeaderResponsive";
import { HeroContentLeft } from "./components/HeroContentLeft";



function App() {

  

    return  (
      <div>
        <HeaderResponsive />
        <HeroContentLeft />
        <DoubleHero />
        <FeaturesCards />
        <EmailBanner />
      </div>
    );
}

export default App;
