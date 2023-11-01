import React, { FC } from 'react';
import { Pressable, View } from 'react-native/types'
import GameCard from '../components/game';

const HomeScreen: FC<any> = ({ navigation }) => {
  const goToGame = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <View>
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
