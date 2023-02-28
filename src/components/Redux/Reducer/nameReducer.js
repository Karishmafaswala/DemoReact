// create Reducer 
// const initialState = 0;

const userState = {
    userId: 123,
    name: 'karishma'
}

const uersReducer = (state = userState,action) =>{
    switch(action.type){
        case "SET_NAME" :            //action method name
            state ={
                ...state,
                 name:action.playload
            }
            return state
            break;

        case "SET_ID" :
            state={
                ...state,
                userId:action.playload
            }
            return state 
            break;

        default:
            return state
    }

}

export default uersReducer