import React, { useState , useEffect} from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CelanaDalam, KoasKaki, LeftArrow, RincianPesananBantal, RincianPesananCelanaPanjang, RincianPesananCelanaPendek, RincianPesananJaket, RincianPesananKaos, SarungBantal, back } from '../../assets';
import colors from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PilihSendiri1({ navigation }) {
  const [totalSelected, setTotalSelected] = useState(0); // Menyimpan total jumlah barang yang dipilih
  const [totalHarga, setTotalHarga] = useState(0); // Menyimpan total harga

  const [selectedClothes, setSelectedClothes] = useState({
    kaos: { count: 0, showCount: false },
    celanaPendek: { count: 0, showCount: false },
    celanaPanjang: { count: 0, showCount: false },
    jaket: { count: 0, showCount: false },
    sarungBantal: { count: 0, showCount: false },
    kaosKaki: { count: 0, showCount: false },
    celanaDalam: { count: 0, showCount: false },
    selimut: { count: 0, showCount: false },
  });


   // Fungsi untuk mengambil total harga dari AsyncStorage
   const getTotalHargaFromStorage = async () => {
    try {
      const totalHargaString = await AsyncStorage.getItem('totalHarga');
      if (totalHargaString !== null) {
        const totalHargaNumber = parseInt(totalHargaString, 10);
        setTotalHarga(totalHargaNumber);
      }
    } catch (error) {
      console.error('Gagal mengambil total harga dari AsyncStorage:', error);
    }
  };

  // Menggunakan useEffect untuk mengambil total harga saat komponen dimuat
  useEffect(() => {
    getTotalHargaFromStorage();
  }, []); // Parameter kedua [], agar efek ini hanya dijalankan sekali saat komponen dimuat

  const handleIncrement = (type) => {
    setSelectedClothes((prevSelected) => {
      const newCount = prevSelected[type].count + 1;
      const showCount = newCount > 0;
      const newTotalSelected = totalSelected + 1; // Tambahkan ke totalSelected
      console.log(`Jumlah ${type} dipilih: ${newCount}`);
      setTotalSelected(newTotalSelected); // Update totalSelected
      return {
        ...prevSelected,
        [type]: { count: newCount, showCount },
      };
    });
  };

  const handleDecrement = (type) => {
    if (selectedClothes[type].count > 0) {
      setSelectedClothes((prevSelected) => {
        const newCount = prevSelected[type].count - 1;
        const showCount = newCount > 0;
        const newTotalSelected = totalSelected - 1; // Kurangi dari totalSelected
        console.log(`Jumlah ${type} dipilih: ${newCount}`);
        setTotalSelected(newTotalSelected); // Update totalSelected
        return {
          ...prevSelected,
          [type]: { count: newCount, showCount },
        };
      });
    }
  };

  const isAnyItemSelected = () => {
    for (const item in selectedClothes) {
      if (selectedClothes[item].count > 0) {
        return true;
      }
    }
    return false;
  };


  const handlePesanSekarang = async () => {
   // Menghitung total jumlah seluruh barang yang dipilih
   const totalItems = Object.values(selectedClothes).reduce(
    (accumulator, item) => accumulator + item.count,
    0
  );
    // Menghitung total harga
  const hargaPerPcs = 2000; // Harga per pakaian
  const totalHarga = totalItems * hargaPerPcs;

  // Mendapatkan tanggal pemesanan saat 
  const currentDate = new Date();
  const tanggalPemesanan = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;


  // Simpan data di local storage
  try {
    await AsyncStorage.setItem('totalItems', totalItems.toString());
    await AsyncStorage.setItem('totalHarga', totalHarga.toString());
    await AsyncStorage.setItem('tanggalPemesanan', tanggalPemesanan);
  } catch (error) {
    console.error('Gagal menyimpan data di local storage:', error);
  }

    // Tampilkan total dalam konsol atau lakukan apa pun yang Anda inginkan dengannya
    console.log(`Total keseluruhan pakaian yang dipilih: ${totalItems}`);
    console.log(`Total harga: Rp ${totalHarga}`);
    console.log(`Tanggal pemesanan: ${tanggalPemesanan}`);
    navigation.replace("PilihSendiri3")

    // Selain itu, Anda bisa menjalankan logika lain yang diperlukan saat tombol "Pesan Sekarang" diklik
  };

  const handleBack = () => {
    navigation.navigate("HomeScreen")
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

        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, marginTop: 20, textAlign:'center'}}>Pilih pakaian yang ingin anda laundry</Text>

        <View style={{marginTop: 20}}>
        {/* BAGIAN KAOS DAN  CELANA PENDEK */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

        {/* KAOS */}
<View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.kaos.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.kaos.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.kaos.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 60, height: 50 }} source={RincianPesananKaos} />
    )}
    <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity onPress={() => handleIncrement('kaos')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.kaos.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('kaos')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 20 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, textAlign: 'center', color: selectedClothes.kaos.showCount ? 'white' :  colors.primary, }}>Baju</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.kaos.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>

        {/* CELANA PENDEK */}
        <View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.celanaPendek.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.celanaPendek.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.celanaPendek.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 60, height: 50 }} source={RincianPesananCelanaPendek} />
    )}
    <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity onPress={() => handleIncrement('celanaPendek')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.celanaPendek.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('celanaPendek')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 20 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, textAlign: 'center', color: selectedClothes.celanaPendek.showCount ? 'white' :  colors.primary, }}>Celana Pendek</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.celanaPendek.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>
        </View>


           {/* BAGIAN CELANA PANJANG DAM SELIMUT */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop: 10,}}>

        {/* CELANA PANJANG */}
        <View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.celanaPanjang.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.celanaPanjang.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.celanaPanjang.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 60, height: 50 }} source={RincianPesananCelanaPanjang} />
    )}
    <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity onPress={() => handleIncrement('celanaPanjang')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.celanaPanjang.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('celanaPanjang')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 20 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', color: selectedClothes.celanaPanjang.showCount ? 'white' :  colors.primary, }}>Celana Panjang</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.celanaPanjang.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>

        {/* SELIMUT */}
        <View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.selimut.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.selimut.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5, marginBottom:20}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.selimut.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 60, height: 68 ,}} source={RincianPesananBantal} />
    )}
    <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity onPress={() => handleIncrement('selimut')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.selimut.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('selimut')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 5 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', color: selectedClothes.selimut.showCount ? 'white' :  colors.primary, }}>Selimut</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.selimut.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>
        </View>

           {/* BAGIAN JAKET DAN BANTAL  */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop: 10,}}>

        {/* CELANA PANJANG */}
        <View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.jaket.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.jaket.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.jaket.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 68, height: 50 }} source={RincianPesananJaket} />
    )}
    <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity onPress={() => handleIncrement('jaket')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.jaket.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('jaket')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 20 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', color: selectedClothes.jaket.showCount ? 'white' :  colors.primary, }}>Jaket</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.jaket.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>
        {/* SARUNG BANTAL */}
        <View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.sarungBantal.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.sarungBantal.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.sarungBantal.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 68, height: 50 }} source={SarungBantal} />
    )}
    <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity onPress={() => handleIncrement('sarungBantal')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.sarungBantal.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('sarungBantal')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 20 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', color: selectedClothes.sarungBantal.showCount ? 'white' :  colors.primary, }}>Sarung Bantal</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.sarungBantal.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>

        </View>


            {/* BAGIAN KAOS KAKI DAN CELANA DALAM  */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop: 10,}}>

        {/* KAOS KAKI */}
        <View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.kaosKaki.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.kaosKaki.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5, marginBottom:15}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.kaosKaki.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 68, height: 60 }} source={KoasKaki} />
    )}
    <View style={{marginTop: 12, marginLeft: 22 }}>
        <TouchableOpacity onPress={() => handleIncrement('kaosKaki')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.kaosKaki.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('kaosKaki')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 10 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', color: selectedClothes.kaosKaki.showCount ? 'white' :  colors.primary, }}>Kaos Kaki</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.kaosKaki.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>
        {/* SELIMUT */}
        <View style={{ padding: 10, borderRadius: 5, borderBottomWidth: 5, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#cccc', width: 143, height: 136, backgroundColor: selectedClothes.celanaDalam.showCount ? '#53A5DF' : 'transparent' }}>
  <View style={{ flexDirection: 'row', }}>
    {selectedClothes.celanaDalam.showCount ? (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 25, marginRight: 15 , left: 10, top: 5, marginBottom:15}}>
        <Text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' , textAlign:'center', }}>{selectedClothes.celanaDalam.count}</Text>
      </View>
    ) : (
      <Image style={{ width: 68, height: 60 }} source={CelanaDalam} />
    )}
    <View style={{marginTop: 12, marginLeft: 22 }}>
        <TouchableOpacity onPress={() => handleIncrement('celanaDalam')} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, 
        borderTopRightRadius:5, borderTopLeftRadius:5, borderTopWidth:1, borderLeftWidth:1, borderRightWidth:1, borderColor: selectedClothes.celanaDalam.showCount ? 'white' : 'white', }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' , top : -2}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrement('celanaDalam')} style={{ backgroundColor: '#cccc', width: 23, height:  14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={{ alignItems: 'center', marginTop: 10 }}>
    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, textAlign: 'center', color: selectedClothes.celanaDalam.showCount ? 'white' :  colors.primary, }}>Celana Dalam</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center', color: selectedClothes.celanaDalam.showCount ? 'white': colors.primary, }}>Rp 2.000/pcs</Text>
  </View>
</View>
        </View>
        </View>
        <View>
        </View>
    </View>

      </ScrollView>
      {isAnyItemSelected() && (
        <TouchableOpacity onPress={handlePesanSekarang} style={{
          padding:10,
          backgroundColor:colors.primary,
          alignItems:'center',
          borderTopRightRadius:10, 
          borderTopLeftRadius:10,

        }}>
<Text style={{
  color:'white',
  fontFamily:'Poppins-SemiBold',
  textAlign:'center',
  fontSize:15,

}}>Pesan Sekarang!</Text>
        </TouchableOpacity>
      )}

    </View>

  );
}
