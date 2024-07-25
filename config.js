import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  backendUrl: 'http://192.168.184.177:8080',
};

const getStoredData = async () => {
  try {
    const storedEmail = await AsyncStorage.getItem('email');
    const storedToken = await AsyncStorage.getItem('token');
    return { email: storedEmail, token: storedToken };
  } catch (error) {
    console.error('Error retrieving stored data', error);
    return { email: null, token: null };
  }
};

export { config, getStoredData };
