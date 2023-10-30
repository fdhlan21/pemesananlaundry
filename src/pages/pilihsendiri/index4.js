import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BankPayIcon, CODIcon, GopayIcon, LeftArrow, MethodIcon, NotifikasiAmbilTanpaRibet3, OVOIcon, PaymentIcon, RincianPesananBantal, RincianPesananCelanaPanjang, RincianPesananCelanaPendek, RincianPesananJaket, RincianPesananKaos, Shoopepayicon, back } from '../../assets';
import colors from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PilihSendiri4({ navigation }) {
    const [typedText, setTypedText] = useState('');


  useEffect(() => {
  const getTotalHarga = async () => {
    try {
      const hargaPakaianString = await AsyncStorage.getItem('totalHarga');
      const hargaPakaianNumber = parseInt(hargaPakaianString, 10);

      const totalHarga = hargaPakaianNumber.toLocaleString('id-ID'); // Menambahkan pemisah ribuan

      const typingInterval = 150;

      let currentIndex = 0;

      const typingTimer = setInterval(() => {
        if (currentIndex < totalHarga.length) {
          setTypedText(totalHarga.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingTimer);
        }
      }, typingInterval);

      return () => {
        clearInterval(typingTimer);
      };
    } catch (error) {
      console.error('Gagal mendapatkan data harga:', error);
    }
  };

  getTotalHarga();
}, []);

  

  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          padding: 10,
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        <TouchableOpacity onPress={handleBack} style={{ left: -70 }}>
          <Image style={{ height: 45, width: 45, }} source={back} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', left : -15 }}>
          <Text style={{ color: 'black', fontFamily: 'Poppins-SemiBold', fontSize: 20, textAlign: 'center' }}>
             Pisah Sendiri
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
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, }}>Total Rp {typedText.toLocaleString('id-ID')}</Text>
        </View>
        </View>


        {/* PAYMENT METHOD */}
        <View style={{padding:10,  }}>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
          <Text style={{fontFamily:"Poppins-SemiBold", fontSize:12, top:2,}}>Payment Methods</Text>
          <Image style={{width:25, height:25 , left:10}} source={MethodIcon}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:15}}>
        {/* PAYMENT BANK */}
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("BankPayment2")}>
              <Image style={{height:50, width:50, }} source={BankPayIcon}/>
            </TouchableOpacity>
          </View>

            {/* PAYMENT BANK */}
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("OVOPayment")}>
              <Image style={{height:40, width:40, }} source={OVOIcon}/>
            </TouchableOpacity>
          </View>
          
            {/* PAYMENT BANK */}
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("QrisPayment")}>
              <Image style={{height:50, width:50, top: -5}} source={Shoopepayicon}/>
            </TouchableOpacity>
          </View>
          
            {/* PAYMENT BANK */}
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("GopayPayment")}>
              <Image style={{height:40, width:40, }} source={GopayIcon}/>
            </TouchableOpacity>
          </View>
          
            {/* PAYMENT BANK */}
            <View>
            <TouchableOpacity onPress={()=> navigation.navigate("CODPayment")}>
              <Image style={{height:40, width:40, }} source={CODIcon}/>
            </TouchableOpacity>
          </View>
          
        </View>

        </View>

        </View>
      </View>
      </ScrollView>
    </View>
  );
}
