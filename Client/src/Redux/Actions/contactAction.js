import axios from "axios";
import {GET_ALL,FAILED} from "./ActioType"

export const getContact = () => async (dispatch) => {
    try {
        let result = await axios.get("/api/contact/all");
        dispatch({ type: GET_ALL, payload: result.data.response }); 
        console.log(result)
    } catch (error) {
        dispatch({type:FAILED,payload:error})    }
};
export const postContact = (newContact) => async (dispatch)=>{
    try {
        const result = await axios.post("/api/contact/add",newContact)
        dispatch(getContact())
        
    } catch (error) {
        dispatch({type:FAILED,payload:error})   
    }
}
export const deleteContact = (id) => async (dispatch) =>{
    try {
        const result = await axios.delete(`/api/contact/delete/${id}`)
         dispatch(getContact())
    } catch (error) {
        dispatch({type:FAILED,payload:error}) 
    }
}
export const updateContact=(id,data)=>
    async(dispatch)=>{
        try{
            const result=await axios.put(`api/contact/update/${id}`,data)
            dispatch(getContact())
        }

    catch(err){
        dispatch({type:FAILED,payload:err})
    }
}