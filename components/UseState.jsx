'use client'
import { useState } from "react";

function Show() {

    const [state, setState] = useState(0);

    const handle = () => {
        const latest = state + 1;
        setState(latest)
    }
      
  return(
    <>
    {state}
    <button onClick={handle}>Chick</button>    
    </>
  )
}


export default Show