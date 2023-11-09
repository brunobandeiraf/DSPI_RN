import React, {FC, useEffect, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import VStyles from '../styles/pages/vertical/LoginScreen.style';
import HStyles from '../styles/pages/horizontal/LoginScreen.style';
import fetchSignup from '../fetchs/signup';

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
type SignupScreenRouteProp = RouteProp<RootStackParamList, 'Signup'>;

type Props = {
  navigation: SignupScreenNavigationProp;
  route: SignupScreenRouteProp;
};

const SignupScreen: FC<Props> = ({navigation}) => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleRepeatPasswordChange = (text: string) => {
    setRepeatPassword(text);
  };

  const signup = async () => {
    if (password !== repeatPassword) {
      console.error('As senhas não coincidem');
      return;
    }

    const result = await fetchSignup(name, email, password, repeatPassword);

    if (result.includes('error')) {
      console.error(result);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View
      style={
        orientation === 'portrait' ? VStyles.container : HStyles.container
      }>
      <View
        style={
          orientation === 'portrait'
            ? VStyles.titleContainer
            : HStyles.titleContainer
        }>
        <Text
          style={orientation === 'portrait' ? VStyles.title : HStyles.title}>
          Libras
        </Text>
        <Text
          style={
            orientation === 'portrait' ? VStyles.subtitle : HStyles.subtitle
          }>
          Champ Robot
        </Text>
      </View>
      <View
        style={
          orientation === 'portrait'
            ? VStyles.formContainer
            : HStyles.formContainer
        }>
        <View
          style={orientation === 'portrait' ? VStyles.forms : HStyles.forms}>
          <View>
            <View
              style={
                orientation === 'portrait' ? VStyles.inputBox : HStyles.inputBox
              }>
              <Text
                style={
                  orientation === 'portrait'
                    ? VStyles.inputLabel
                    : HStyles.inputLabel
                }>
                Nome
              </Text>
              <TextInput
                style={
                  orientation === 'portrait' ? VStyles.input : HStyles.input
                }
                placeholder="usuario"
                value={name}
                onChangeText={handleNameChange}
              />
            </View>
            <View
              style={
                orientation === 'portrait' ? VStyles.inputBox : HStyles.inputBox
              }>
              <Text
                style={
                  orientation === 'portrait'
                    ? VStyles.inputLabel
                    : HStyles.inputLabel
                }>
                Email
              </Text>
              <TextInput
                style={
                  orientation === 'portrait' ? VStyles.input : HStyles.input
                }
                placeholder="usuario@gmail.com"
                value={email}
                onChangeText={handleEmailChange}
              />
            </View>
          </View>
          <View>
            <View
              style={
                orientation === 'portrait' ? VStyles.inputBox : HStyles.inputBox
              }>
              <Text
                style={
                  orientation === 'portrait'
                    ? VStyles.inputLabel
                    : HStyles.inputLabel
                }>
                Senha
              </Text>
              <TextInput
                style={
                  orientation === 'portrait' ? VStyles.input : HStyles.input
                }
                placeholder="senha"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={true}
              />
            </View>
            <View
              style={
                orientation === 'portrait' ? VStyles.inputBox : HStyles.inputBox
              }>
              <Text
                style={
                  orientation === 'portrait'
                    ? VStyles.inputLabel
                    : HStyles.inputLabel
                }>
                Repita a Senha
              </Text>
              <TextInput
                style={
                  orientation === 'portrait' ? VStyles.input : HStyles.input
                }
                placeholder="senha"
                value={repeatPassword}
                onChangeText={handleRepeatPasswordChange}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View
            style={
              orientation === 'portrait' ? VStyles.otherBox : HStyles.otherBox
            }>
            <Pressable
              style={
                orientation === 'portrait'
                  ? VStyles.registerContainer
                  : HStyles.registerContainer
              }>
              <Text
                style={
                  orientation === 'portrait'
                    ? VStyles.register
                    : HStyles.register
                }
                onPress={() => goToLogin()}>
                JA TENHO CADASTRO
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={
          orientation === 'portrait' ? VStyles.loginBox : HStyles.loginBox
        }>
        <Pressable
          style={
            orientation === 'portrait'
              ? VStyles.loginContainer
              : HStyles.loginContainer
          }
          onPress={() => signup()}>
          <Text
            style={orientation === 'portrait' ? VStyles.login : HStyles.login}>
            Cadastrar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupScreen;
