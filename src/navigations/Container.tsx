import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation from "./Auth";
import MainNavigation from "./Main";

const Stack = createNativeStackNavigator();

const Container = () => {
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