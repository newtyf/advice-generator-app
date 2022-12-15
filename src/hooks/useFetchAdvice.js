import React, { useEffect, useState } from "react";

export const useFetchAdvice = () => {
  const [{ id, advice }, setAdvice] = useState({ id: null, advice: null });
  const [isLoading, setIsLoading] = useState(true)

  const getAdvice = async () => {
    setIsLoading(true)
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    //const translatedText = await translateAdvice(data.slip.advice)
    //data.slip.advice = translatedText
    setAdvice(data.slip);
    setIsLoading(false)
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { id ,advice, getAdvice, isLoading };
};
