import React, {FC, useEffect, useState} from 'react';
import {Pressable, View, StyleSheet, useWindowDimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GameCard from './GameScreen';
import VStyles from '../styles/pages/vertical/HomeScreen.style';
import HStyles from '../styles/pages/horizontal/HomeScreen.style';
import {RootStackParamList} from '../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

const HomeScreen: FC<Props> = ({navigation}) => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToGame = (gameName: string) => {
    navigation.navigate('Quiz', {quizName: gameName});
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={() => goToGame('AEIOU')}>
        <GameCard
          name="AEIOU"
          styles={
            orientation === 'portrait' ? VStyles.gameCard : HStyles.gameCard
          }
          image="/"
        />
      </Pressable>
      <Pressable onPress={() => goToGame('ABCDE')}>
        <GameCard
          name="ABCDE"
          styles={
            orientation === 'portrait' ? VStyles.gameCard : HStyles.gameCard
          }
          image="https://firebasestorage.googleapis.com/v0/b/champlibras.appspot.com/o/ABCDE.png?alt=media&token=806c9250-8d54-4748-ad6e-41e1db48bd37&_gl=1*1uiuhay*_ga*MTc2MzY4MTg3NC4xNjk5MDQzMTY1*_ga_CW55HF8NVT*MTY5OTE1MDQ3Ny40LjEuMTY5OTE1MjA2OC42MC4wLjA."
        />
      </Pressable>
    </View>
  );
};

export default HomeScreen;
