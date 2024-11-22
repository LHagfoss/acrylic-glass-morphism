import Image from "next/image";
import { StaticImageData } from "next/image";

import Image1 from "../../public/LOOP-case-study-Thumbnail.jpg"
import Image2 from "../../public/Rightover-Thumbnail.jpg"
import Image3 from "../../public/Google-Translate-Thumbnail.jpg"
import Image4 from "../../public/ICHAM-website-thumbnail.jpg"
import Image5 from "../../public/Undo_Thumbnail3.jpg"
import Image6 from "../../public/ADDX-Thumbnail3.jpg"
import Image7 from "../../public/Enoulite-Thumbnail.jpg"
import Image8 from "../../public/Typography_cover3.jpg"
import Image9 from "../../public/Typography-vinyl-mockup.jpg"
import Image10 from "../../public/adidas-poster-thumbnail.jpg"



const ImageCard = ({ image, content }: { image: StaticImageData, content: string }) => {
    return (
        <div className="rounded-3xl flex flex-col gap-3 cursor-pointer">
            <Image src={image} alt="" className="rounded-3xl" placeholder="blur" blurDataURL="data:..." />
            <h1 className="text-purple-100 text-md">{content}</h1>
        </div>
    );
};

export default function ImageCollage() {
    return (
        <div className="w-[100vw] flex justify-center items-center p-5 md:p-52">
            <div className="container flex flex-col gap-5">
                <h1 className="text-purple-200 text-5xl">
                Projects & Work <a href="https://chofichang.com/" className="text-sm underline italic">Content taken from Chofi Chang</a>
                </h1>
                <div className="flex gap-12">
                    <div className="w-full row flex flex-col gap-12">
                        <ImageCard image={Image1} content="Loop Unlock Rewards with Clothing Donation" />
                        <ImageCard image={Image4} content="Rightover Turning Surplus into Sharing" />
                        <ImageCard image={Image7} content="Google Translate Multi-Device Chat" />
                        <ImageCard image={Image10} content="Google Translate Multi-Device Chat" />
                    </div>
                    <div className="w-full row flex flex-col gap-12">
                        <ImageCard image={Image2} content="ICHAM Elevates Wealth Management Experience" />
                        <ImageCard image={Image5} content="Undo Turn Your Veganity Upside Down" />
                        <ImageCard image={Image8} content="ADDX Optimises Private Market Investing" />
                    </div>
                    <div className="w-full row flex flex-col gap-12">
                        <ImageCard image={Image3} content="Enoulite Revolutionising Baby Nutrition Packaging" />
                        <ImageCard image={Image6} content="A Typographic Journey into Proverbs" />
                        <ImageCard image={Image9} content="Thermal Typography Experimenting with Helvetica" />
                    </div>
                </div>
            </div>
        </div>
    );
};