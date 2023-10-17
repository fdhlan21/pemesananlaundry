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

export const RegisterURL = 'http://192.168.6.137/reinelaundry/Api/register';
export const LoginURL = 'http://192.168.6.137/reinelaundry/Api/login';
export  const MYAPP = 'REINE LAUNDRY'; 
