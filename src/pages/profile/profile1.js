import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../utils/colors'
import { DefaultPorfile, IconKelaur, LeftArrow, LogoCeklis, MeProfile } from '../../assets'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function Profile1({navigation}) {


  const [profileImage, setProfileImage] = useState(null);
 
  const handleUploadPhoto = () => {
    let options = {
      mediaType: 'photo', // Gunakan 'photo' untuk gambar
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
  
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
  
      if (response.didCancel) {
        alert('Tidak Memilih Gambar!');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Kamera tidak tersedia di perangkat ini');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Izin tidak diberikan');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
  
      // Perbarui cara Anda mengekstrak nilai 'uri'
      const imageUri = response.assets[0]?.uri;
  
      if (imageUri) {
        console.log('uri -> ', imageUri);
        setProfileImage(imageUri);
      }
    });
  };
  
  
  
  

  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
         <View
        style={{
          padding: 10,
          backgroundColor: colors.primary,
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity onPress={handleBack} style={{ left: -110 }}>
          <Image style={{ height: 24, width: 24, tintColor: 'white' }} source={LeftArrow} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', left : 0 }}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 15, textAlign: 'center' }}>
      Profile
          </Text>
        </View>
        <View style={{left: 100}}>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Image style={{tintColor:'#ffff', width: 26 , height: 21, }} source={IconKelaur}/>
            </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{flex:1,  }}>

        <View style={{backgroundColor:'white', padding:10, borderTopLeftRadius:20, borderTopRightRadius:20,  marginTop:'10%'}}>

        {/* PROFILE */}

        <View style={{padding:10, alignItems:'center', top: -50}}>
            <View>
            <TouchableOpacity onPress={() => handleUploadPhoto('photo')}>
        {profileImage ? (
          <Image style={{ width: 150, height: 150, borderRadius: 20 }} source={{ uri: profileImage }} />

        ) : (
          <Image  style={{ width: 150, height: 150, borderRadius: 20 }} source={DefaultPorfile} />
        )}
      </TouchableOpacity>
            </View>
            
        {/* NAME PROFILE */}
            <View style={{top:5}}>
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, }}>Joel</Text>
          </View>
        
        {/* NOMOR HP */}

        <View style={{top:5}}>
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, }}>0812 3456 7890</Text>
        </View>

        {/* ALAMAT RUMAH */}
        <View style={{top:5}}>
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, }}>Tawakal 11 No.10a</Text>
        </View>
        </View>


       

        </View>
        
      </ScrollView>

    </View>
  )
}