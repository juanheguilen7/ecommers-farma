import AllProducts from "@/components/AllProducts/AllProducts";
import Advertisements from "@/components/Advertisements/Advertisements";
import Offers from "@/components/Offer/Offers";
import BannerSlide from "@/components/banner/BannerSlide";


export default function Home() {
  return (
    <main>
      <BannerSlide />
      <Advertisements />
      <Offers />
      <AllProducts />
    </main>
  );
}
