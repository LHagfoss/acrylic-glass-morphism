const ImageCard = ({ height, content }: { height: string, content: string }) => {
  return (
    <div style={{ minHeight: height }} className="bg-zinc-950 rounded-3xl">
        <h1 className="">{content}</h1>
    </div>
  )
}

export default function ImageCollage() {
  return (
    <div className="w-[100vw] flex justify-center items-center p-5 md:p-52">
      <div className="container flex flex-col gap-12">
        <h1 className="text-purple-200 text-5xl">
          Projects & Work
        </h1>
        <div className="flex gap-12">
            <div className="w-full row flex flex-col gap-12">
                <ImageCard height="65vh" content="" />
                <ImageCard height="55vh" content="" />
                <ImageCard height="70vh" content="" />
                <ImageCard height="60vh" content="" />
                <ImageCard height="50vh" content="" />
            </div>
            <div className="w-full row flex flex-col gap-12">
                <ImageCard height="55vh" content="" />
                <ImageCard height="70vh" content="" />
                <ImageCard height="50vh" content="" />
                <ImageCard height="65vh" content="" />
                <ImageCard height="60vh" content="" />
            </div>
            <div className="w-full row flex flex-col gap-12">
                <ImageCard height="70vh" content="" />
                <ImageCard height="50vh" content="" />
                <ImageCard height="65vh" content="" />
                <ImageCard height="55vh" content="" />
                <ImageCard height="60vh" content="" />
            </div>
        </div>
      </div>
    </div>
  )
}