import { DoubleHero } from "./components/DoubleHero";
import { EmailBanner } from "./components/EmailBanner";
import { FeaturesCards } from "./components/FeaturesCard";
import { HeaderResponsive } from "./components/HeaderResponsive";
import { HeroContentLeft } from "./components/HeroContentLeft";
import { Shop } from "./components/Shop";


function App() {

  

    return  (
      <div>
        <HeaderResponsive />
        <HeroContentLeft />
        <FeaturesCards />
        <DoubleHero />
        <Shop />
      </div>
    );
}

export default App;
