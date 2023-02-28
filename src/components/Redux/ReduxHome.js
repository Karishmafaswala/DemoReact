// import redux from 'redux'

// const redux = require('redux')
// const createStore = redux.createStore

// //action in redux
// function ReduxHome() {
//   return {
//     type: BUY_CAKE,
//     info: 'Fisrt Redux Action'
//   }
// }


// ///state (pervious State)
// const intialState = {
//     numofCake : 10
// }

// //reducer
// const reducer = (state = intialState, action) => {

//     switch(action.type){
//             case BUY_CAKE : return {
//                 ...state,
//                 numofCake : state.numofCake -1
//             }

//         default: return state    
//     }
// }

// //redux store
// const store = createStore(reducer)
// console.log('intital State',store.getState())
// const unsubcribe = store.subscribe(() => console.log("Update state",getState()) )
// store.dispatch(ReduxHome())
// store.dispatch(ReduxHome())
// store.dispatch(ReduxHome())
// unsubcribe()