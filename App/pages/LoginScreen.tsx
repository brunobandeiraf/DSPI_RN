import React, {FC, useEffect, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';

// EXT
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// STYLES
import VStyles from '../styles/pages/vertical/LoginScreen.style';
import HStyles from '../styles/pages/horizontal/LoginScreen.style';

// ROUTES
import fetchLogin from '../fetchs/login';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: FC<Props> = ({navigation}) => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const login = async () => {
    const result = await fetchLogin(email, password);

    if (result.includes('error')) {
      console.error(result);
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View
      style={ VStyles.container }>
        <View style={VStyles.firstCont}>
            <Text style={VStyles.title}>Champ Robot</Text>
            <Text style={VStyles.subtitle}>Libras</Text>
        </View>

        <View style={VStyles.midContainer}>
            <View style={VStyles.inpsOut}>
                <Text style={VStyles.innerTitle}>Email</Text>
                <TextInput style={VStyles.inp} placeholder='ex@email.com'/>
            </View>
            <View style={VStyles.inpsOut}>
                <Text style={VStyles.innerTitle}>Password</Text>
                <TextInput secureTextEntry={true} styles={VStyles.inp} placeholder='********'/>
            </View>
            <View style={VStyles.inpsOut}>
                <TouchableOpacity styles={VStyles.bt}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>

        <View style={VStyles.secondCont}>
            <TouchableOpacity style={VStyles.registerOut} onPress={()=>goToSignup()}>
                <Text style={VStyles.registerText1}>Ainda não tem cadastro?</Text>
                <Text style={VStyles.registerText2}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default LoginScreen;
