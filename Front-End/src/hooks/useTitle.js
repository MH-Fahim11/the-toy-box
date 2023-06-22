import { useEffect } from "react"


const useTitle = title =>{
    useEffect(()=>{
     document.title =`The Toy Box | ${title}`;   
    },[title])
}

export default useTitle;