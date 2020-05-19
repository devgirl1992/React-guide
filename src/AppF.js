 // import React, { useState } from "react";
// import Person from "./Person/Person";
// import "./App.css";

// const app = (props) => {
//   const [state, setstate] = useState({
//     persons: [
//       { name: "Zoe", age: 28 },
//       { name: "Lili", age: 23 },
//       { name: "Emilli", age: 23 },
//     ],
//     otherState: "somePersonWillAddlater",
//   });

//   // we can have use setState as much as we want uhoo
//   const [secondState, secondSetState] = useState({
//     secondvalue: "Some Other Value",
//   });

//   console.log(state, secondState);

//   const switchNameHandler = () => {
//     setstate({
//       persons: [
//         { name: "Zaturnin", age: 18 },
//         { name: "Melorin", age: 16 },
//         { name: "Isabella", age: 19 },
//       ],
//       otherState: "somePersonWillAddlater",
//     });
//   };

//   return (
//     <div className="App">
//       <h2>It is Now Finctional Componet</h2>
//       <button onClick={switchNameHandler}>Switch Name</button>

//       <Person name={state.persons[0].name} 
//       age={state.persons[0].age} 
//       />

//       <Person name={state.persons[1].name} 
//       age={state.persons[1].age} />

//       <Person name={state.persons[2].name} 
//       age={state.persons[2].age} />

//     </div>
//   );
// };

// export default app;
