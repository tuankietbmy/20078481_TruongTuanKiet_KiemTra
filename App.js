// src/App.js
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/Store';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
 
const Stack = createStackNavigator();

function MainNavigator() {
  const currentScreen = useSelector((state) => state.navigation.screen);

  return (
    <Stack.Navigator>
      {currentScreen === 'Screen1' ? (
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            title: 'Home',
            headerLeft: () => null,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{
              title: 'Product List',
            }}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{
              title: 'Product Details',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
