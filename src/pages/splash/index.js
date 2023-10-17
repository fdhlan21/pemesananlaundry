import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { SplashGIF } from '../../assets'

export default function SplashScreen({navigation}) {
        useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        },2100)
    },[])
  return (
    <View style={{flex:1, backgroundColor:'white', }}>
     <View style={{padding:10, alignItems:'center', marginTop:'10%'}}>
            <Image style={{
                height:500,
                width:500,
                }} source={SplashGIF} />
     </View>
    </View>
  )
}