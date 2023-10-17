import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { LogoLaundry } from '../../assets'
import colors from '../../utils/colors'

export default function LoginScreen({navigation}) {

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
<View style={{padding:10, marginTop:'50%'}}>
    <View style={{alignItems:'center'}}>
        <Image style={{width:350, height:300}} source={LogoLaundry}/>
    </View>

{/* LOGIN OR REGISTER */}
    <View>
<View style={{marginTop:'20%'}}>
{/* Sign Up */}
    <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}    style={{padding:10, backgroundColor:colors.primary, borderRadius:10,}}>
        <Text style={{color:'white', textAlign:'center', fontSize:15,}}>Sign Up</Text>
    </TouchableOpacity>
{/* Log In */}
        <TouchableOpacity onPress={() => navigation.navigate("loginPageScreen")} style={{padding:10, backgroundColor:'#fff', borderRadius:10, borderWidth:2, borderColor:colors.primary, marginTop:20}}>
        <Text style={{color:colors.primary, textAlign:'center', fontSize:15,}}>Sign In</Text>
    </TouchableOpacity>
</View>
    </View>

</View>
    </View>
  )
}