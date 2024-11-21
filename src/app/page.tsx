import GrainyBackground from "@/components/GrainyBackground";
import Navbar from "@/components/Navbar";
import Splitter from "@/components/Splitter";
import AcrylicBoxes from "@/components/AcrylicBoxes";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <GrainyBackground />
      <Splitter />
      <AcrylicBoxes />
    </div>
  );
}