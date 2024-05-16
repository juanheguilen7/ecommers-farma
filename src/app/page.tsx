import Advertisements from "./components/Advertisements/Advertisements";
import AllProducts from "./components/AllProducts/AllProducts";
import NewCard from "./components/NewCard/NewCard";
import Offers from "./components/Offer/Offers";
import BannerSlide from "./components/banner/BannerSlide";


export default function Home() {
  return (
    <main>
    
      <Advertisements />
      <Offers />
      <AllProducts />
    </main>
  );
}
