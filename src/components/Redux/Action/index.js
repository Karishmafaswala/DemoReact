

//create action
export const incNumber = () => { 
    return {
        type: 'INCREMENT'
    }
}
export const decNumber = () =>{
    return {
         type: 'DECREMENT'
        }
}

export const userName = () =>{
    return{
        type: 'SET_NAME'
    }
}
export const userId = () =>{
    return{
        type: 'SET_ID'
    }
}