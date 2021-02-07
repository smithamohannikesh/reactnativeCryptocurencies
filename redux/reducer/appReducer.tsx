import {addingCurrencyAction,ADD_DATA,userCurenciesState} from '../../types/types'
 const initialState:userCurenciesState={
    currencies:[]
     
 }
const appReducer=(state=initialState,action:addingCurrencyAction)=>{

     switch(action.type){
         case ADD_DATA:
             return {...state,currencies:[...state.currencies,action.payload]};
         default:
             return state;
     }
 
     
 

}
export default appReducer