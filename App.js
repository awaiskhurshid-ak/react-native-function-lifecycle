import React, {useState,useEffect} from 'react'
import {
    View,
    Text,
    Button



} from 'react-native';


const App = ()=>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Use Effect Call")
        console.warn("Use Effect Call")
    })
    console.log("render call")
    console.warn("render warn")
    return(
        <View>
            <Text style={{fontSize:25}}>Your count value is {count}</Text>
            <Button onPress={()=>{setCount(count+1)}} title='Increment'/>

        </View>
    )


}


export default App;