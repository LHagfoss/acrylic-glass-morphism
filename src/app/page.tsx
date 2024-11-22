import GrainyBackground from "@/components/GrainyBackground";
import Navbar from "@/components/Navbar";
import Splitter from "@/components/Splitter";
import AcrylicBoxes from "@/components/AcrylicBoxes";
import WhoAmI from "@/components/WhoAmI";
import ImageCollage from "@/components/ImageCollage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <GrainyBackground />
      <Splitter />
      <WhoAmI />
      <ImageCollage />
      <AcrylicBoxes />
      <Footer />
    </div>
  );
}