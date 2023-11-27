import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import QuizScreen from './pages/QuizScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SingupScreen';
import GameScreen from './pages/GameScreen';
import {BluetoothProvider} from './context/BluetoothContext';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Signup: undefined;
  Quiz: {
    quizName: string;
    image: string;
    desc: string;
  };
  Game: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <BluetoothProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BluetoothProvider>
  );
};

export default App;
