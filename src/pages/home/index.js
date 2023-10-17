import { View, Text, Image, Animated, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { ButtonAmbilTanpaRibet, ButtonPilihSendiri, IconInfoLaundry, LogoLaundry, MeProfile, Notify, NotifyInfoLaundry } from '../../assets'
import colors from '../../utils/colors'

export default function HomeScreen({navigation}) {

     const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Menambahkan delay sebelum animasi dimulai (misalnya, 2 detik atau 2000ms)
    const delayDuration = 1200;

    // Menggunakan setTimeout untuk menambahkan delay
    const delayTimeout = setTimeout(() => {
      // Memulai animasi setelah delay
      Animated.timing(scale, {
        toValue: 1,
        duration: 500, // Durasi animasi setelah delay
        useNativeDriver: false,
      }).start();
    }, delayDuration);

    // Membersihkan timeout ketika komponen dibongkar
    return () => clearTimeout(delayTimeout);
  }, []);



  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <ScrollView>
    <View style={{padding:10,}}>

    <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
        <View>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:13, }}>Selamat Pagi,</Text>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, }}>Alver</Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile1")}>
            <Image style={{height:40, width:40}} source={MeProfile}/>

        </TouchableOpacity>
        </View>
    </View>

    <View style={{padding:10,}}>
        <View style={{alignItems:'center'}}>
           <Animated.View
        style={{
          transform: [{ scale }],
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Image style={{ width: 336, height: 80 }} source={Notify} />
      </Animated.View>
        </View>
    </View>

    <View style={{padding:10}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:25}}>Pilih Jenis Paket!</Text>
    </View>

        <View style={{padding:10,}}>


                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("AmbilTanpaRibet")}>
                        <Image style={{width:340, height:138}} source={ButtonAmbilTanpaRibet}/>
                    </TouchableOpacity>
                </View>

                    <View style={{marginTop:30}}>
                    <TouchableOpacity onPress={() => navigation.navigate("PilihSendiri1")}>
                        <Image style={{width:340, height:138}} source={ButtonPilihSendiri}/>
                    </TouchableOpacity>
                </View>


        </View>

        <View>

            <View style={{padding:10,}}>
      <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
      <View style={{marginTop:-10, right: -50}}>
      <TouchableOpacity onPress={() => navigation.navigate("InformasiLaudnryScreen")}>
      <Image style={{width:55, height:48,}} source={IconInfoLaundry} />
      <Image style={{width:95, height:35, left: -40, top:-7}} source={NotifyInfoLaundry} />
      </TouchableOpacity>
      </View>
    </View>
            </View>

        </View>
    </View>
    <View style={{padding:10, height:100, alignItems:'center',}}>
      <Image style={{width:147, height:122, top: -30}} source={LogoLaundry} />
    </View>
    </ScrollView>
      <View>
    </View>
    </View>
  )
}