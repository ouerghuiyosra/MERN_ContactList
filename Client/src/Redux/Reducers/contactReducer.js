import {GET_ALL,FAILED} from '../Actions/ActioType'

const initialState ={
    contacts:[]
}


const contactReducer = (state=initialState,Action) => {
switch (Action.type) {
    case GET_ALL:
        return{
            ...state,contacts:Action.payload      }
     case FAILED:
         return{
         ...state,error:Action.payload}

    default:
return state
}
}

export default contactReducer
