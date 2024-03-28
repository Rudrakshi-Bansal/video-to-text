'use client'
import React, { useState, useEffect } from "react";
import getEmoji from "../serverActions/emojimart";

const Emoji = () => {
  const [key, setKey] = useState('');
  const [emoji, setEmoji] = useState('');

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != null) {
      setKey(e.target.value);
    }
  };
  const fetchEmoji = async () => {
    if (key!= '') {
      const k = await getEmoji(key); // Use await to properly handle the Promise
      setEmoji(k);
    }
  };
  useEffect(() => {

    fetchEmoji(); // Call the async function
  }, [key]); // Make sure to include key in the dependency array

  return (
    <div>
      <input className="text-black" type="string" onChange={handleKeyChange} />
      <h1>{emoji}</h1>
    </div>
  );
};

export default Emoji;
;

