import AllProducts from "@/components/AllProducts";
import Advertisements from "@/components/Advertisements";
import Offers from "@/components/Offers";
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
