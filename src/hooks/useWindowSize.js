import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const[windowSize,setWindowSize]=useState({
        width:undefined,
        height:undefined
    });

    useEffect(()=>{
        
        const handleResize = () => {
            setWindowSize ({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);/*this line is used to remove the memory leak. resize 
        job is done so we can remove this. basically it is a Cleanup*/
    },[])

  return windowSize;

}

export default useWindowSize
