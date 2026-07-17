import { useEffect, useState } from "react";


export function useTyping(
  text: string,
  speed = 50
) {

  const [display, setDisplay] = useState("");


  useEffect(() => {

    let index = 0;


    setDisplay("");


    const timer = setInterval(() => {

      setDisplay(
        text.slice(0, index)
      );


      index++;


      if(index > text.length){
        clearInterval(timer);
      }


    }, speed);


    return () => clearInterval(timer);


  }, [text, speed]);


  return display;
}