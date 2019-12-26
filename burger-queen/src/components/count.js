import React, {Component, useReducer, useState} from 'React';

// function Count() {

//   const estadoInicial = {count: 0};
  
//   function reducer(state, action) {
//     switch (action.type) {
//       case 'incrementar':
//         return { count: state.count + 1 }
//       case 'decrementar':
//         return { count: state.count - 1 }
//       default:
//         return state
//     }
//   }
  
//   function Counter({ estadoInicial }) {
//     const [state, dispatch] = useReducer(reducer, estadoInicial );
//     return (
//       <>
//         Count: {state.count}
//         <button onClick={() => dispatch({type: 'incrementar'})}>+</button>
//         <button onClick={() => dispatch({type: 'decrementar'})}>-</button>
//       </>
//     );
//   }
// }
// export default Count; 