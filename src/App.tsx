import 'react-native-gesture-handler';

import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { appConfig } from './constants/app.config';
import { AppProvider } from './context/AppContext';

import Container from './navigations/Container';

const setKeptLoginData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export default function App(): JSX.Element {

  useEffect(() => {
    setKeptLoginData()
  }, [])

  return (
    <AppProvider 
      defaultTheme='light'
    >
      <Container />
    </AppProvider>
  );
}