import CheckBox from '@react-native-community/checkbox'; // Import CheckBox
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Calenda1, LeftArrow, LogoLaundry, MapPointLogo } from '../../assets';
import colors from '../../utils/colors';


export default function AmbilTanpaRibet({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cuciSajaChecked, setCuciSajaChecked] = useState(false);
  const [siapPakaiChecked, setSiapPakaiChecked] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setSelectedDate(date);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOk = () => {
    // Handle ketika tombol "OK" ditekan
    if (selectedDate instanceof Date) {
      // Lakukan apa yang perlu dilakukan dengan tanggal yang dipilih
      console.log("Tanggal yang dipilih:", selectedDate);
      hideDatePicker(); // Tutup kalendar setelah tombol "OK" ditekan
      // Tambahkan logika lain yang diperlukan
    } else {
      // Tampilkan pesan kesalahan jika tanggal belum dipilih
      console.log("Pilih tanggal terlebih dahulu");
    }
  };

  const handleCuciSajaChange = () => {
    setCuciSajaChecked(!cuciSajaChecked);
    setSiapPakaiChecked(false); // Pastikan checkbox "Siap Pakai" tidak dicentang
  };

  const handleSiapPakaiChange = () => {
    setSiapPakaiChecked(!siapPakaiChecked);
    setCuciSajaChecked(false); // Pastikan checkbox "Cuci Saja" tidak dicentang
  };

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
        <View style={{ padding: 10 }}>
          {/* Lokasi Anda */}
          <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ tintColor: 'white', height: 40, width: 39 }} source={MapPointLogo} />
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', marginLeft: 5 }}>Lokasi Anda</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  borderWidth: 1,
                  height: 40,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                }}
                placeholder="Masukan Lokasi..."
                placeholderTextColor="gray"
              />
            </View>
          </View>

          {/* Kalendar */}
          <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 5, marginTop: '10%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ tintColor: 'white', height: 30, width: 30 }} source={Calenda1} />
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', marginLeft: 5 }}>Tanggal Ambil</Text>
            </View>
            <View style={{ marginTop: 10, backgroundColor: 'white', borderRadius: 5, padding: 10, height: 40, borderWidth: 1 }}>
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={{ color: 'black', fontFamily: 'Poppins-SemiBold' }}>
                  {selectedDate ? selectedDate.toLocaleDateString() : 'Pilih Tanggal'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {isDatePickerVisible && (
            <View style={{alignItems:'center', borderWidth:1, borderRadius:5, marginTop:5}}>
              <DatePicker
                date={selectedDate}
                onDateChange={handleConfirmDate}
                mode="date"
                textColor="black"
                style={{borderWidth:1,}}
              />
              {selectedDate && (
                <TouchableOpacity style={{width:'100%'}} onPress={handleOk}>
                  <View
                    style={{
                      backgroundColor: colors.primary,
                      padding: 10,
                      borderRadius: 5,
                      alignItems: 'center',
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold' }}>Konfirmasi</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          )}

{/* CHECKBOXES */}

<View style={{marginTop:'10%'}}>
{/* TEKS PILIH JENIS LAYANAN */}
    <View>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, }}>Pilih Jenis Layanan</Text>
    </View>
                    {/* CHECKBOXES */}
                    <View style={{flexDirection:'row',}}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
        <CheckBox
            value={cuciSajaChecked}
            onValueChange={handleCuciSajaChange}
            tintColors={{true : colors.primary, false: 'gray'}}
        />
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, }}>Cuci Saja</Text>
    </View>
   <View style={{flexDirection:'row', alignItems:'center'}}>
        <CheckBox
            value={siapPakaiChecked}
            onValueChange={handleSiapPakaiChange}
            tintColors={{true : colors.primary, false: 'gray'}}
        />
        <Text style={{fontFamily:'Poppins-Regular', fontSize:12, }}>Siap Pakai</Text>
    </View>
                    </View>


</View>
        </View>

        <View style={{padding:10, alignItems:'center', marginTop:20}}>
            <TouchableOpacity onPress={() => navigation.navigate("AmbilTanpaRibet2")} style={{padding:10, backgroundColor:colors.primary, width:'80%', color:'white', borderRadius:5, alignItems:'center'}}>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'white', textAlign:'center', }}>Pesan</Text>
            </TouchableOpacity>
        </View>

        <View  style={{alignItems:'center', marginTop:'10%'}}>
            <Image style={{height:200, width:200}} source={LogoLaundry}/>
        </View>
      </ScrollView>
    </View>
  );
}
