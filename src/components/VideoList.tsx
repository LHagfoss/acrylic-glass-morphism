import { motion } from 'framer-motion';
import LikeButton from './LikeButton';

export default function VideoList() {
    return (
        <section className="video-list h-full flex flex-col gap-3">
                {[...Array(8)].map((_, index) =>
                    <motion.div 
                        key={index} 
                        className="video-placeholder bg-purple-100 p-3 rounded-2xl flex items-center relative inset-0"
                    >
                        <div className="w-[130px] h-[80px] bg-purple-950 flex justify-center items-center rounded-xl cursor-pointer">
                            <span className="material-icons text-purple-100">play_circle_outline</span>
                        </div>
                        <div className="flex flex-col h-full justify-center ml-3">
                            <h1 className='text-zinc-950 font-bold text-lg'>Video Title {index + 1}</h1>
                            <p className="text-zinc-500 text-sm">Video Description</p>
                        </div>
                        <LikeButton />
                    </motion.div>
                )}
        </section>
    )
}