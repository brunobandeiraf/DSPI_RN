import React, {FC, useEffect, useState} from 'react';
import {Pressable, View, useWindowDimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GameCard from '../components/GameCard';
import VStyles from '../styles/pages/vertical/HomeScreen.style';
import HStyles from '../styles/pages/horizontal/HomeScreen.style';
import {RootStackParamList} from '../App';
import quizData from '../data.quiz';

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

  const goToGame = (quizName: string, image: string, desc: string) => {
    navigation.navigate('Quiz', {quizName: quizName, image: image, desc: desc});
  };

  return (
    <View
      style={
        orientation === 'portrait' ? VStyles.container : HStyles.container
      }>
      <Pressable
        onPress={() => goToGame('AEIOU', quizData[1].url, quizData[1].desc)}>
        <GameCard
          styles={orientation === 'portrait' ? VStyles : HStyles}
          image={quizData[1].url}
        />
      </Pressable>
      <Pressable
        onPress={() => goToGame('ABCDE', quizData[1].url, quizData[1].desc)}>
        <GameCard
          styles={orientation === 'portrait' ? VStyles : HStyles}
          image={quizData[1].url}
        />
      </Pressable>
    </View>
  );
};

export default HomeScreen;
