

import React, { useState } from "react";

function HookEx() {

   const [count , setCount] = useState(0);
   const [fruits, setFruits] = useState('banana');
   const [todos, setTodos] = useState([{ text: 'Learn Hooks'} ]);

   console.log('fruits: ' + fruits);


   //const arr = ['ahmed' , 'mohamed'];
   //const [val1, val2] = arr;
   console.log(count, setCount);

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