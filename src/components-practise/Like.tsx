import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <AiFillHeart size={20} color="#ff6b81" onClick={() => setStatus(false)} />
    );

  return <AiOutlineHeart onClick={() => setStatus(true)} size={20} />;
};

export default Like;
