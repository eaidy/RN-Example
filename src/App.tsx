import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigation from '@navigations/Main';
import AuthNavigation from '@navigations/Auth';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {

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