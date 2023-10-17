import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LeftArrow, MethodIcon, NotifikasiAmbilTanpaRibet3, PaymentIcon, RincianPesananBantal, RincianPesananCelanaPanjang, RincianPesananCelanaPendek, RincianPesananJaket, RincianPesananKaos } from '../../assets';
import colors from '../../utils/colors';


export default function PilihSendiri4({ navigation }) {
    const [typedText, setTypedText] = useState('');
  const textToType = 'Rp 9.000';

  useEffect(() => {
    const typingInterval = 150; // Interval waktu antara setiap karakter diketik (dalam milidetik)
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, typingInterval);

    return () => {
      clearInterval(typingTimer);
    };
  }, []);

  const handleBack = () => {
    navigation.navigate("AmbilTanpaRibet")
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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
        <TouchableOpacity onPress={handleBack} style={{ left: -90 }}>
          <Image style={{ height: 24, width: 24, tintColor: 'white' }} source={LeftArrow} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' , left: -10}}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 15, textAlign: 'center' }}>
            Pisah Sendiri
          </Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} horizontal={false}>
      <View style={{padding:10, }}>

        {/* RINCIAN PAKAIAN */}
        <View style={{padding:20,}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, }}>Rincian Pakaian</Text>

     

        {/* BAGIAN CELANA  PENDEK DAN JAKET */}
        
        <View style={{flexDirection:'row',   marginLeft: -10, marginTop: 10,}}>

        {/* CELANA PENDEK */}
        <View style={{flexDirection:'row',}}>
        {/* IMAGE CELANA PENDEK  */}
        <View style={{left:8}}>
            <Image style={{width:47, height:47}} source={RincianPesananCelanaPendek}/>
        </View>
        {/* TEKS */}
        <View style={{marginLeft:12,}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, top: 10}}>X 3  Rp 9.000</Text>
        </View>
        </View>

        </View>

    
        {/* GARIS */}
        <View style={{padding: 1, backgroundColor:'black', width:'100%', marginTop: 10}}></View>


        {/* TOTAL */}
        <View style={{padding:20, flexDirection:'row', justifyContent:'center', marginTop:0}}>
        <View>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, }}>Total  {typedText}</Text>
        </View>
        </View>


        {/* PAYMENT METHOD */}
        <View style={{marginTop: 20}}>
            <View style={{flexDirection:'row',}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, }}>Payment Methods</Text>
            <Image style={{height:20, width:20, left: 10 }} source={MethodIcon}/>
            </View>

            <View>
                <Image style={{height:90, width:300}} source={PaymentIcon}/>
            </View>
        </View>

        </View>
      </View>
      </ScrollView>
            <View style={{}}>
                <TouchableOpacity onPress={() => navigation.navigate("PilihSendiri5")} style={{padding:10, backgroundColor:colors.primary, borderTopLeftRadius: 10, borderTopRightRadius: 10  }}>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, color:'white', textAlign:'center'}}>Bayar</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}
