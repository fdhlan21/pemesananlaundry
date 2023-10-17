import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CelanaDalam, KoasKaki, LeftArrow, RincianPesananBantal, RincianPesananCelanaPanjang, RincianPesananCelanaPendek, RincianPesananJaket, RincianPesananKaos, SarungBantal } from '../../assets';
import colors from '../../utils/colors';


export default function PilihSendiri1({ navigation }) {
  

  const handleBack = () => {
    navigation.navigate("HomeScreen")
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
        <View style={{ alignItems: 'center', left : -10 }}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 15, textAlign: 'center' }}>
             Pisah Sendiri
          </Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} horizontal={false}>
    
    <View style={{padding:10, }}>

        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, marginTop: 20}}>Pilih pakaian yang ingin anda laundry</Text>

        <View style={{marginTop: 20}}>
        {/* BAGIAN KAOS DAN  CELANA PENDEK */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

        {/* KAOS */}
            <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc', width:143, height:136}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:60, height:50, }} source={RincianPesananKaos}/>

        <View style={{marginTop: 10, marginLeft: 20 }}>
        <TouchableOpacity style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 20}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Baju</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>

        {/* CELANA PENDEK */}
        <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc',  width:143, height:136}}>
        <View style={{flexDirection:'row'}}>
        <Image style={{width:60, height:68 }} source={RincianPesananCelanaPendek}/>
        <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("PilihSendiri2")} style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 0}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Celana Pendek</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>
        </View>


           {/* BAGIAN CELANA PANJANG DAM SELIMUT */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop: 10,}}>

        {/* CELANA PANJANG */}
            <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc', width:143, height:136}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:60, height:50, }} source={RincianPesananCelanaPanjang}/>

        <View style={{marginTop: 10, marginLeft: 20 }}>
        <TouchableOpacity  style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 20}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Jeans</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>

        {/* SELIMUT */}
        <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc',  width:143, height:136}}>
        <View style={{flexDirection:'row'}}>
        <Image style={{width:60, height:68 }} source={RincianPesananBantal}/>
        <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 0}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Selimut</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>
        </View>

           {/* BAGIAN JAKET DAN BANTAL  */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop: 10,}}>

        {/* CELANA PANJANG */}
            <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc', width:143, height:136}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:60, height:50, }} source={RincianPesananJaket}/>

        <View style={{marginTop: 10, marginLeft: 20 }}>
        <TouchableOpacity style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 20}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Jaket</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>

        {/* SELIMUT */}
        <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc',  width:143, height:136}}>
        <View style={{flexDirection:'row'}}>
        <Image style={{width:50, height:58 }} source={SarungBantal}/>
        <View style={{marginTop: 12, marginLeft: 20 }}>
        <TouchableOpacity style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 10}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Sarung Bantal</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>
        </View>


            {/* BAGIAN JAKET DAN BANTAL  */}
        <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop: 10,}}>

        {/* CELANA PANJANG */}
            <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc', width:143, height:136}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:50, height:58, }} source={KoasKaki}/>

        <View style={{marginTop: 10, marginLeft: 20 }}>
        <TouchableOpacity style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 10}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Kaos Kaki</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>

        {/* SELIMUT */}
        <View style={{padding:10,  borderRadius:5, borderBottomWidth:5, borderRightWidth:1, borderLeftWidth:1, borderColor: '#cccc',  width:143, height:136}}>
        <View style={{flexDirection:'row'}}>
        <Image style={{width:50, height:58 }} source={CelanaDalam}/>
        <View style={{marginTop: 12, marginLeft: 10 }}>
        <TouchableOpacity style={{ backgroundColor: colors.primary, width: 23, height: 14, justifyContent: 'center', alignItems: 'center', marginRight: 10, borderTopRightRadius:5, borderTopLeftRadius:5,  }}>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#cccc', width: 23, height: 14, justifyContent: 'center', alignItems: 'center',  borderBottomRightRadius:5, borderBottomLeftRadius:5, }}>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{alignItems:'center', marginTop: 10}}>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize: 15, textAlign:'center', color:colors.primary,}}>Celana Dalam</Text>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 12, textAlign:'center', color:colors.primary,}}>Rp 2.000/pcs</Text>
        </View>
        </View>
        </View>
        </View>


        <View>
        </View>
    </View>

      </ScrollView>
            
    </View>
  );
}
