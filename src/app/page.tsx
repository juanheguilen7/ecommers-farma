import { getServerSession } from "next-auth";
import Advertisements from "./components/Advertisements/Advertisements";
import AllProducts from "./components/AllProducts/AllProducts";
import Offers from "./components/Offer/Offers";

export default function Home() {

  return (
    <main>
      <Advertisements />
      <Offers />
      <AllProducts />
    </main>
  );
}
