


function MyList() {
   const numbers = [1, 2, 3, 4, 5, 6];
   const douubled = numbers.map((num) => num * 2);
   let val = douubled.map(
    (li, index) => <li key={index} > num {li} </li>
    );
   console.log(val);    
   return (
      <ul>
         {val}
      </ul>
   );
}

export default MyList;