import React, { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="cursor-pointer absolute right-5 flex gap-3" >
      {liked ? (
        <span className="material-icons text-red-400 scale-125" onClick={toggleLike}>favorite</span>

      ) : (
        <span className="material-icons text-red-400 scale-125" onClick={toggleLike}>favorite_outline</span>
      )}
        <span className="material-icons text-zinc-800 scale-125">share</span>
    </div>
  );
};