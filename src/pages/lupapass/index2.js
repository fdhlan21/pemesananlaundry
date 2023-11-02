import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../../utils/colors'
import { HidePass, LogoLaundry, ShowPass } from '../../assets';

export default function LupaPassword2({navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [eyeIconSource, setEyeIconSource] = useState(HidePass);
    
    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setEyeIconSource(passwordVisible ? HidePass : ShowPass); // Mengubah gambar berdasarkan status passwordVisible
  };
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>

     <View style={{padding:20,}}>
    <View style={{marginTop:'10%'}}>

    <View>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:25, textAlign:"left", }}>Lupa Password</Text>
    </View>

    <View>
        <Text style={{fontFamily:'Poppins-Medium', fontSize:15, textAlign:"left", color:'#B0B0B0'}}>Silakan ganti Password anda</Text>
    </View>

    <View style={{marginTop:50}}>
        <TextInput style={{backgroundColor:"white", borderWidth:1, borderRadius:10, height:40, color:"black",
        fontFamily:'Poppins-Medium', fontSize:12, paddingRight:10, paddingLeft:10,}} placeholder='Password baru' placeholderTextColor='black' inputMode='numeric'/>

<View style={{ flexDirection: 'row', alignItems: 'center', borderWidth:1, height:40, borderRadius:10,marginTop:20}}>
                 <TextInput style={{flex: 1,  color:'black', fontFamily:'Poppins-Medium', fontSize:12, paddingLeft:10, paddingRight:10}} placeholder='Konfirmasi Password baru' 
                placeholderTextColor='black' secureTextEntry={!passwordVisible}
    />

                <TouchableOpacity style={{left:-10}}  onPress={togglePasswordVisibility}>
                    <Image style={{height:21, width:21}} source={eyeIconSource}/>
                </TouchableOpacity>
                </View>

    </View>


    <View style={{marginTop:'50%'}}>
        <TouchableOpacity style={{padding:10, backgroundColor:colors.primary, borderRadius:10, }}>
            <Text style={{color:"white", fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:"center",}}>Ganti Password</Text>
        </TouchableOpacity>
    </View>



    <View style={{alignItems:"center", marginTop:'30%'}}>
        <Image style={{width:221, height:173}} source={LogoLaundry} />
    </View>
    </View>

     </View> 
    </ScrollView>
    </View>
  )
}