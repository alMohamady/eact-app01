

import React, { useState , useEffect } from "react";

function HookEx() {

   const [count , setCount] = useState(0);
   const [count2 , setCount2] = useState(0);

   useEffect(() => {
       //document.title = ` 1: ${count} 2: ${count2}`;       
       //setCount(count + 1);
       console.log("do it");
   }, [count, count2])

   return (
    <div>
       <p> you clicked {count} thims </p>
       <button onClick={() => setCount(count + 1)} >
         click me
       </button>

       <button onClick={() => setCount2(count2 + 1)} >
         click me 2
       </button>
    </div>
   )

} 

export default HookEx;