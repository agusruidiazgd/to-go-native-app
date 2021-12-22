import React from 'react';
import store from './store/configStore';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {React$Node} from 'src/TypesAndInterfaces/AppTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './modules/Auth/LoginScreen';

const App: () => React$Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="To Go" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
