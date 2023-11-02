import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../utils/colors';
import { DefaultPorfile, IconKeluar, IconLogout, KoasKaki, LeftArrow, LogoCeklis, MeProfile, RightArrow, SarungBantal,editIcon } from '../../assets';
import { MYAPP, UploadProfile, getData, storeData } from '../../localstorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScrollIndicator from 'react-native-scroll-indicator';
import { IconEdit } from '../../assets/img/index2';



export default function Profile1({ navigation }) {
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({}); // Menambahkan inisialisasi state
  const [profileImage, setProfileImage] = useState(null);

  // Function to load the profile image from local storage
  const loadProfileImageFromLocal = async (id) => {
    try {
      const profileImageData = await AsyncStorage.getItem(`profileImage_${id}`);
      if (profileImageData) {
        setProfileImage(profileImageData);
      }
    } catch (error) {
      console.error('Error loading image from local storage:', error);
    }
  };

  useEffect(() => {
    getData('androiduser').then((response) => {
      setData(response);
      console.log('Data User: ', response);
      // Mengeksekusi fungsi loadProfileImageFromLocal dan mencetak hasilnya
      const username = response.username;
      loadProfileImageFromLocal(username); // Memanggil fungsi ini untuk mengambil gambar profil dari local storage
    });

  }, []);

  const handleBack = () => {
    navigation.navigate("HomeScreen");
  };


  const handleLogout = () => {
    // Menampilkan konfirmasi popup
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin keluar?',
      [
        {
          text: 'Tidak',
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => {
            // Menghapus parameter username sementara
            storeData('androiduser', null);
            navigation.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            });
            Alert.alert(MYAPP, 'Berhasil Logout');
          },
        },
      ],
      { cancelable: false }
    );
  };


const handleEditProfile = () => {
//NAVUGASI KE EDITPROFILE

navigation.navigate("EditProfile");
}

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <View
        style={{
          padding: 10,
          backgroundColor: colors.primary,
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{padding:10, }}>
          <TouchableOpacity onPress={handleBack}>
            <Image style={{tintColor:'white', height: 24, width: 24,}} source={LeftArrow}/>
          </TouchableOpacity>
        </View>
        <View style={{padding:10, }}>
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'white', }}>Profile</Text>
        </View>
        <View style={{padding:10, }}>
          <TouchableOpacity onPress={handleLogout}>
            <Image style={{width:24, height:24, tintColor:'white'}} source={IconLogout}/>
          </TouchableOpacity>
        </View>

      </View>


        <View style={{ backgroundColor: 'white', padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: '20%', 
        height:'100%'}}>
          {/* PROFILE */}
          <View style={{ padding: 10, alignItems: 'center', top: -50 }}>
            <View>
                {profileImage ? (
                  <Image style={{ width: 150, height: 150, borderRadius: 20 }} source={{ uri: profileImage }} />
                ) : (
                  <Image style={{ width: 150, height: 150, borderRadius: 20 }} source={DefaultPorfile} />
                )}
            </View>

            {/* NAME PROFILE */}
            <View style={{ top: 5 }}>
              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15 }}>{userData.username ? userData.username: data.username}</Text>
            </View>

            {/* NOMOR HP */}
            <View style={{ top: 5 }}>
              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15 }}>{userData.nomortelepon ? userData.nomortelepon: data.nomortelepon}</Text>
            </View>

            {/* ALAMAT RUMAH */}
            <View style={{ top: 5 }}>
              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15 }}>{userData.alamat ? userData.alamat: data.alamat}</Text>
            </View>


            <View style={{marginTop:10}}>
            <TouchableOpacity onPress={handleEditProfile} style={{padding:10, backgroundColor:colors.primary, borderRadius:10, flexDirection:'row',
            justifyContent:'space-evenly',  width: '50%'}}>
                  <Image style={{width:24, height:24, tintColor:'white', }} source={editIcon}/>
                  <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:15, }}>Edit Profile</Text>
            </TouchableOpacity>

          </View>
          </View>
       
          <View style={{padding:10}}>
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, marginTop: 10}}>History</Text>
            <ScrollView horizontal={true} contentContainerStyle={{width:500,}} style={{marginTop:20, }}>
                  {/* DAFTAR HISTORY PEMESANAN */}
                  <View style={{padding:10, backgroundColor:colors.primary, width:189, height:100, borderRadius:20}}>
                  {/* TANGGAL PEMESANAN */}
                  <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'white', textAlign:'right', }}>03/08/2023</Text>

                  {/* JENIS PEMESANAN */}
                  <View style={{flexDirection:'row', }}>
                  
                  <View style={{}}>
                    <Image style={{height:60, width: 68, }} source={KoasKaki}/>
                  </View>

                  <View style={{padding:10, }}>
                      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'white'}}>Pesanan 1</Text>
                      <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'white'}}>Rp 30.000</Text>
                  </View>
                  </View>
                  </View> 

                  <View style={{padding:10, backgroundColor:colors.primary, width:240, height:100, borderRadius:20, marginLeft:10}}>
                          {/* TANGGAL PEMESANAN */}
                  <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'white', textAlign:'right', }}>03/08/2023</Text>

                  {/* JENIS PEMESANAN */}
                  <View style={{flexDirection:'row', }}>
                  
                  <View style={{}}>
                    <Image style={{height:62, width: 68, }} source={SarungBantal}/>
                  </View>

                  <View style={{padding:10, }}>
                      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'white'}}>Veggie Tomato Mix</Text>
                      <Text style={{fontFamily:'Poppins-Regular', fontSize:12, color:'white'}}>4,5     Rp 30.000</Text>
                  </View>
                  </View>
                  </View> 

            </ScrollView>

                  {/* See More */}
            <View style={{alignItems:'flex-end', top:10}}>
                <View style={{flexDirection:'row', alignItems:'center', }}>
                    <Text style={{fontFamily:'Poppins-Regular', color:colors.primary, fontSize:12, }}>See More</Text>
                    <Image style={{width:24, height:24, tintColor:colors.primary}} source={RightArrow} />
                </View>    
            </View>        
          </View>

        
        </View>
      
    </View>
  );
}
