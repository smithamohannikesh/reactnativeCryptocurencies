import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {Home}    from '../screen/Home';
import {Details} from '../screen/Details'
const stack =createStackNavigator();
  const Navigation =()=>{
      return(
        <NavigationContainer>
        <stack.Navigator>
            <stack.Screen
                name="Home"
                component={Home}
                options={
                    {
                        title:'CryptoTrackerPro',
                        headerStyle:{
                            backgroundColor:"blue"

                        }
                    }
                }

            />
            <stack.Screen
                name="Details"
                component={Details}
                options={
                    {
                        title:'back to list',
                        headerStyle:{
                            backgroundColor:"blue"

                        }
                    }
                }

            />
        </stack.Navigator>
    </NavigationContainer>
      )
       
}
export default Navigation