import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LeftArrow, MethodIcon, NotifikasiAmbilTanpaRibet2, NotifikasiAmbilTanpaRibet3, OrangNyuci, PaymentIcon, RincianPesananBantal, RincianPesananCelanaPanjang, RincianPesananCelanaPendek, RincianPesananJaket, RincianPesananKaos } from '../../assets';
import colors from '../../utils/colors';
import { useNavigationBuilder } from '@react-navigation/native';


export default function AmbilTanpaRibet3({ navigation }) {
    const [typedText, setTypedText] = useState('');
  const textToType = 'Rp 164.530';

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
        <TouchableOpacity onPress={handleBack} style={{ left: -70 }}>
          <Image style={{ height: 24, width: 24, tintColor: 'white' }} source={LeftArrow} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 15, textAlign: 'center' }}>
            Ambil Tanpa Ribet
          </Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} horizontal={false}>
      <View style={{padding:10, }}>

        {/* NOTIFIKASI */}
        <View style={{padding:10, alignItems:'center'}}>
            <Image style={{width:391, height:90}} source={NotifikasiAmbilTanpaRibet3}/>
        </View>


        {/* RINCIAN PAKAIAN */}
        <View style={{padding:20,}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, }}>Rincian Pakaian</Text>

        {/* BAGIAN KOAS DAN BANTAL */}
        <View style={{flexDirection:'row', justifyContent:'space-around',  marginLeft: -20, marginTop: 20,}}>

        {/* KAOS */}
        <View style={{flexDirection:'row',}}>
        {/* IMAGE KAOS */}
        <View>
            <Image style={{width:40, height:34}} source={RincianPesananKaos}/>
        </View>
        {/* TEKS */}
        <View style={{marginLeft:10,}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, top: 10}}>X 2  Rp 6.000</Text>
        </View>
        </View>

            {/* BANTAL */}
        <View style={{flexDirection:'row'}}>
        {/* IMAGE BANTAL */}
        <View>
            <Image style={{width:35, height:40}} source={RincianPesananBantal}/>
        </View>
        {/* TEKS */}
        <View style={{marginLeft:10,}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, top: 10}}>X 1  Rp 8.000</Text>
        </View>
        </View>
        </View>

        {/* BAGIAN CELANA  PENDEK DAN JAKET */}
        
        <View style={{flexDirection:'row', justifyContent:'space-around',  marginLeft: -20, marginTop: 10,}}>

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

            {/* BANTAL */}
        <View style={{flexDirection:'row'}}>
        {/* IMAGE BANTAL */}
        <View style={{top:5, left: 8}}>
            <Image style={{width:51, height:42}} source={RincianPesananJaket}/>
        </View>
        {/* TEKS */}
        <View style={{marginLeft:10,}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, top: 10}}>X 2  Rp 10.0000</Text>
        </View>
        </View>

        </View>

        {/* BAGIAN CELANA PANJANG */}
        <View style={{marginTop:10, marginLeft : -12}}>
            {/* IMAGE CELANA PANJANG */}
            <View style={{flexDirection: 'row'}}>
            {/* IMAGE CELANA PANJANG */}
            <View>
                <Image style={{ height:59, width:61, }} source={RincianPesananCelanaPanjang}/>
            </View>
            {/* TEKS */}
            <View style={{marginLeft: -3, }}>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, top: 10}}>X 1  Rp 5.000</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate("AmbilTanpaRibet4")} style={{padding:10, backgroundColor:colors.primary, borderTopLeftRadius: 10, borderTopRightRadius: 10  }}>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, color:'white', textAlign:'center'}}>Bayar</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}
