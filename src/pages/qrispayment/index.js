import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IconRumah, LogoWhatsApp, QrisLaundry, WhatsAppLogo } from '../../assets'
import colors from '../../utils/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function QrisPaymemnt({navigation}) {
    const [hargaPakaian, setHargaPakaian] = useState(0);
    useEffect(() => {
        const getData = async () => {
            try {
              // Mendapatkan data harga dari penyimpanan lokal
              const hargaPakaianString = await AsyncStorage.getItem('totalHarga');
              console.log('Data harga yang diambil:', hargaPakaianString);
          
              // Mengonversi data harga dari string ke number
              const hargaPakaianNumber = parseInt(hargaPakaianString, 10);
              console.log('Data harga yang diubah ke number:', hargaPakaianNumber);
          
              // Menyimpan harga pakaian dalam state
              setHargaPakaian(hargaPakaianNumber);
            } catch (error) {
              console.error('Gagal mendapatkan data harga:', error);
            }
          }
          
    
        getData();
      }, []);
  return (
    <View style={{flex:1,backgroundColor:'white'}}>

            <ScrollView style={{flex:1, padding:10}} >
                <View>
                    <Text style={{fontFamily:'Poppins-Bold', fontSize: 20, }}>QRIS</Text>
                </View>

                <View>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 18}}>Total Rp {hargaPakaian}</Text>
                </View>

                <View style={{alignItems:'center',}}>
                    <TouchableOpacity  onPress={() => navigation.navigate("QrisPilihSendiri1")}>
                    <Image source={QrisLaundry} style={{width: 246, height: 303, }} />
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', marginTop: 10                                                                                                                                                                                                                                                                                }}>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 12, textAlign:'center',}}>Silakan kirim bukti transfer pada{'\n'}nomor admin laundry ini</Text>
                </View>

                <View style={{alignItems:'center', }}>
                    <TouchableOpacity>
                    <Image style={{width: 100, height: 100}} source={LogoWhatsApp}/>
                    </TouchableOpacity>
                </View>

               <View style={{alignItems:'center', marginTop: 10                                                                                                                                                                                                                                                                                }}>
                    <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 12, textAlign:'center',}}>Jika ada pertanyaan atau kendala adna dapat juga{'\n'}menghubungi WA admin</Text>
                </View>

            </ScrollView>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={{padding:10, backgroundColor:colors.primary, alignItems:'center'}}>
                    <Image style={{width: 30, height: 45, }} source={IconRumah} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("CancelPilihSendiri1")} style={{padding:10, backgroundColor:colors.errormessage}}>
                    <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center'}}>Cancel Pesanan</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}