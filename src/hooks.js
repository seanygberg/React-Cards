import { useState } from "react";

function useFlip(initialFlipState = true) {
  const [isFlipped, setIsFlipped] = useState(initialFlipState);

  const toggleFlip = () => {
    setIsFlipped((isFlipped) => !isFlipped);
  };

  return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
    const [data, setData] = useState([]);

    const addData = async (endpoint = "") => {
        const res = await axios.get(`${baseUrl}${endpoint}`);
        setData((data) => [...data, res.data]);
    }

    const clearData = () => setData([]);

    return [data, addData, clearData];
}

export default {useFlip, useAxios};