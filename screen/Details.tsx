import React , { useState } from "react"
import {View ,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import {addCurrency} from '../redux/action/action'
export const Details=(props:any)=>{
    const dispatch=useDispatch();
    const [currency,textInputValue]=useState('');
    const curcy:any=useSelector((state:any)=>state.app.currencies)
    const search=()=>{
        dispatch(addCurrency(currency,curcy))
        
        props.navigation.navigate("Home")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add a Creyptocurrency</Text>
            <TextInput  style={styles.input}placeholder="Use a name or ticker symbol" onChangeText={(value:string)=>{textInputValue(value) }} value={currency}/>
            <TouchableOpacity style={styles.sbutton} onPress={()=>{search()}}>
                    <Text style={styles.text}> Add </Text>      
                </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        borderColor:"grey",
        width:"80%",
       borderWidth:2
    },
    text:{
        fontSize:20,
        color:"black"
    },
    sbutton:{
        backgroundColor:"yellow",
        width:"40%",
        alignItems: 'center',
      justifyContent: 'center',
    }
})