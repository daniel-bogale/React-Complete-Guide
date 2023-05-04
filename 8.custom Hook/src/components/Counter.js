import { useEffect, useState } from "react";
const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timeOut = setInterval(() => {
      if (forward === true) setCounter((prev) => (prev += 1));
      else setCounter((prev) => (prev -= 1));
    }, 1000);
    return () => {
      clearInterval(timeOut);
    };
  }, [forward]);
  return counter;
};
export default useCounter;
