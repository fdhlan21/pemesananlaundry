import { View, Text, TouchableOpacity, Image, ScrollView, Alert, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../utils/colors';
import { DefaultPorfile, IconKeluar, IconLogout, LeftArrow, LogoCeklis, MeProfile, TombolLogout } from '../../assets';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MYAPP, UploadProfile, editProfile, getData, storeData } from '../../localstorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import axios from 'axios';

export default function EditProfile({ navigation }) {
  const [data, setData] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  // Function to load the profile image from local storage
  const loadProfileImageFromLocal = async (username) => {
    try {
      const profileImageData = await AsyncStorage.getItem(`profileImage_${username}`);
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

  const handleUploadPhoto = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
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

      const imageUri = response.assets[0]?.uri;

      if (imageUri) {
        RNFS.readFile(imageUri, 'base64')
          .then((base64data) => {
            const username = data.username;
            AsyncStorage.setItem(`profileImage_${username}`, imageUri) // Simpan dengan kunci unik
              .then(() => {
                setProfileImage(imageUri);
                console.log(base64data);
                alert('Gambar Profile Berhasil di Unggah');
              })
              .catch((error) => {
                console.error('Terjadi Kesalahan', error);
              });
          })
          .catch((error) => {
            console.error('Terjadi Kesalahan', error);
          });
      }
    });
  };

  const handleBack = () => {
    navigation.navigate("Profile1");
  };


 

  const [editedUsername, setEditedUsername] = useState('');
  const [editedNomortelepon, setEditedNomotelepon] = useState('');
  const [editedAlamat, setEditedAlamat] = useState('');


  const handleSaveChanges = async () => {
    if (editedUsername.length === 0 || editedNomortelepon.length === 0 || editedAlamat.length === 0) {
      Alert.alert(MYAPP, "Anda belum mengubah Profile anda!");
    } else {
      try {
        // Mengambil data pengguna dari AsyncStorage
        const existingData = await AsyncStorage.getItem('androiduser');
        if (!existingData) {
          Alert.alert(MYAPP, 'Data pengguna tidak tersedia.');
          return;
        }
  
        // Parse data pengguna dari string JSON
        const userData = JSON.parse(existingData);
  
        // Pastikan userData memiliki properti "id"
        if (!userData.username) {
          Alert.alert(MYAPP, 'Data pengguna tidak memiliki properti "username".');
          return;
        }
  
        // Simpan perubahan ke local storage
        const updatedProfile = {
          ...userData,
          username: editedUsername,
          nomortelepon: editedNomortelepon,
          alamat: editedAlamat,
        };
  
        await AsyncStorage.setItem('androiduser', JSON.stringify(updatedProfile));
  
        // Kirim permintaan HTTP ke backend dengan parameter "userId"
        const requestData = {
          editedUsername,
          editedNomortelepon,
          editedAlamat,
        };
  
        axios
          .post(editProfile, requestData)
          .then((response) => {
            console.log(response.data);
            if (response.data === 201) {
              console.log("Update Data Profile Berhasil!", response.data);
              Alert.alert("Selamat Perubahan Profile Berhasil!");
              navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
        Alert.alert(MYAPP, 'Terjadi kesalahan.');
      }
    }
  };
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
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
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'white', }}>Edit Profile</Text>
        </View>
        <View style={{padding:10, }}>
          <TouchableOpacity>
            <Image style={{width:24, height:24, tintColor:colors.primary}} source={IconLogout}/>
          </TouchableOpacity>
        </View>

      </View>

        <ScrollView>

    
    
        <View style={{padding: 10, marginTop: '20%', height:'100%',}}>
          {/* PROFILE */}
          <View style={{ padding: 10, top: -50 }}>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity onPress={handleUploadPhoto}>
                {profileImage ? (
                  <Image style={{ width: 150, height: 150, borderRadius: 20 }} source={{ uri: profileImage }} />
                ) : (
                  <Image style={{ width: 150, height: 150, borderRadius: 20 }} source={DefaultPorfile} />
                )}
              </TouchableOpacity>
            </View>

            {/* NAME PROFILE */}
            <View style={{ marginTop:20 }}>
            <TextInput style={{padding:10, backgroundColor:'#ececec', borderWidth:1, borderRadius:10, height:40,
            color:'black', fontFamily:'Poppins-Regular', fontSize:12, paddingRight:10, paddingLeft:10,  }}
                placeholder={data.username} placeholderTextColor='gray' value={editedUsername} 
                onChangeText={(text) => setEditedUsername(text)}
            />
            </View>

            {/* NOMOR HP */}
            <View style={{ marginTop:20 }}>
            <TextInput style={{padding:10, backgroundColor:'#ececec', borderWidth:1, borderRadius:10, height:40,
            color:'black', fontFamily:'Poppins-Regular', fontSize:12, paddingRight:10, paddingLeft:10,  }}
                placeholder={data.nomortelepon} placeholderTextColor='gray' value={editedNomortelepon}
                onChangeText={(text) => setEditedNomotelepon(text)}
            />
            </View>

            {/* ALAMAT RUMAH */}
            <View style={{ marginTop:20 }}>
            <TextInput style={{padding:10, backgroundColor:'#ececec', borderWidth:1, borderRadius:10, height:40,
            color:'black', fontFamily:'Poppins-Regular', fontSize:12, paddingRight:10, paddingLeft:10,  }}
                placeholder={data.alamat} placeholderTextColor='gray' value={editedAlamat}
                onChangeText={(text) => setEditedAlamat(text)}
            />
            </View>



          </View>

          <View style={{marginTop:'-10%'}}>
            <TouchableOpacity onPress={handleSaveChanges} style={{padding:10, backgroundColor:colors.primary, borderRadius:10,}}>
                    <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center', }}>Simpan Perubahan</Text>
            </TouchableOpacity>

          </View>
        </View>
        </ScrollView>
    </View>
  );
}
