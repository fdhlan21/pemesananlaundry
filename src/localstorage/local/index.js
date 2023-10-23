import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
}


export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value);
    }
  } catch(e) {
    // error reading value
  }
}

export const RegisterURL = 'https://laundry.okeadmin.com/Api/register';
export const LoginURL = 'https://laundry.okeadmin.com/Api/login';
export const UploadProfile = "https://laundry.okeadmin.com/Api/uploadprofile";
export const editProfile = "https://laundry.okeadmin.com/Api/editprofile";
export  const MYAPP = 'REINE LAUNDRY'; 
