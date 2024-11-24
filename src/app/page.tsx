import GrainyBackground from "@/components/GrainyBackground";
import Navbar from "@/components/Navbar";
import Splitter from "@/components/Splitter";
import AcrylicBoxes from "@/components/AcrylicBoxes";
import WhoAmI from "@/components/WhoAmI";
import ImageCollage from "@/components/ImageCollage";
import DiscordBot from "@/components/DiscordBot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-[100vw] flex flex-col overflow-x-hidden">
      <Navbar />
      <GrainyBackground />
      <Splitter />
      <WhoAmI />
      <ImageCollage />
      <DiscordBot />
      <AcrylicBoxes />
      <Footer />
    </div>
  );
};