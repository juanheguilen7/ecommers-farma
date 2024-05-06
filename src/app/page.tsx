import Advertisements from "@/components/Advertisements";
import NavBar from "@/components/Nav";
import Offers from "@/components/Offers";
import BannerSlide from "@/components/banner/BannerSlide";


export default function Home() {
  return (
    <>
       <NavBar/>
       <main>
        <BannerSlide/>
        <Advertisements/>
        <Offers />
       </main>
    </>
   
  );
}
