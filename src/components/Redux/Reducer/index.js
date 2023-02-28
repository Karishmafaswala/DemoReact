

// data store in store
const userState ={ 
    userId: '123',
    name:'KARISHMA'
}

const userReducer = ( state = userState ,action) => {
    // return {
    //     ...state,
    //     // user: state.id,
    //     // // user: state.name
    // }

    switch(action.type){
        case 'SET_NAME':
            state = {
                ...state,
                name:action.payload
            }
            return state
            break;

        default:
            return state
    }
}

export default userReducer