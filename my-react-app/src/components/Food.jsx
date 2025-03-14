import React from 'react'

function Food() {
   const food1 = "Orange";
   const food2 = "Banana";

  return (
    <ol>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ol>
  );
}

export default Food;