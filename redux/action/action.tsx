
//import CONST from '../../constants/constants'
import {ADD_DATA} from '../../types/types'
import http from '../../http/http';
import {useDispatch,useSelector} from 'react-redux'

export const getAlldata=()=>{
    return async (dispatch:any) => {
            const res: any = await http.get(`assets/btc/metrics`);
            if (res) {
               
                const posts=res.data.data;
                
               
                dispatch({type:ADD_DATA,payload:posts});
    }
            }
            

}
export const addCurrency=(currency:any,curcy:any)=>{
        
        return async (dispatch:any) => {
                try{
                
                const res: any = await http.get(`assets/${currency}/metrics`);
                if (res) {
                   // console.log(res)
                    const posts=res.data.data;
                    
                    var serchField="symbol";
                    var serchValue=posts.symbol;
                    var flag=1;
                    for (var i=0 ; i < curcy.length ; i++)
                         {
                         if (curcy[i][serchField] == serchValue) {
                              flag=0;   
                         }
                         
                         }
                         if(flag==1){
                         dispatch({type:ADD_DATA,payload:posts});
            
                          }
                          else{
                                  alert("alredy exists")
                          }
                    
                }
                
                }
                catch(error){
                
                        alert(error)
                       
                        
                 }
                 
        }
       
}

