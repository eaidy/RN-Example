import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from "./Auth";
import MainNavigation from "./Main";
import { useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from 'src/context/AppContext';
import { ClientCredentials } from '@models';

const Stack = createNativeStackNavigator();

const getRememberedCredentialsData = async () => {
    try {
      const value = await AsyncStorage.getItem('clientCredentials');
      const parsedObject: ClientCredentials = (value != null ? JSON.parse(value) : null);
      return parsedObject;
    } catch (e) {
        throw new Error("Something went wrong fetching clientCredentials: " + e);
    }
};

const Container = () => {

    const appContext = useContext(AppContext)

    const setRememberedLoginState = async () => {
        try {
          const credentials = await getRememberedCredentialsData();
          appContext.setClientCredentials?.(credentials);
        } catch (e) {
          console.log("Error:", e);
        }
    };

    useEffect(() => {
          setRememberedLoginState()
      }, [])
      
    return (
     <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Main"
            component={MainNavigation} 
          />
          <Stack.Screen
            name="Auth"
            component={AuthNavigation} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
 
export default Container;