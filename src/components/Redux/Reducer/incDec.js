// create Reducer 
const initialState = 0;

const changeNumber = (state = initialState,action) =>{
    switch(action.type){
        case "INCREMENT" :            //action method name
            return state + 1
            break;

        case "DECREMENT" :
            return state - 1
            break;

        default:
            return state
    }

}

export default changeNumber