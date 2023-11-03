import React, {FC, useEffect, useState} from 'react';
import {Pressable, View, StyleSheet, useWindowDimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GameCard from '../components/game';

type RootStackParamList = {
  Home: undefined;
  Quiz: {quizName?: string};
};

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
  const [_orientation, setOrientation] = useState('portrait');

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
        <GameCard name="AEIOU" />
      </Pressable>
      <Pressable onPress={() => goToGame('ABCDE')}>
        <GameCard name="ABCDE" />
      </Pressable>
    </View>
  );
};

export default HomeScreen;
