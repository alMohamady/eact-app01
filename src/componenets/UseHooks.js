

import React, { useState } from "react";

function HookEx() {

   const [count , setCount] = useState(0);

   return (
    <div>
       <p> you clicked {count} thims </p>
       <button onClick={() => setCount(count + 1)} >
         click me
       </button>
    </div>
   )

} 

export default HookEx;