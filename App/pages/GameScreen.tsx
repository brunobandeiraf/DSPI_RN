import React from 'react';
import {Text, View} from 'react-native';

type cardProps = {
  name: string;
  styles: any;
  image: string;
};

const GameCard = (props: cardProps) => {
  const name: string = props.name;

  return (
    <View>
      <Text> {name} </Text>
    </View>
  );
};

export default GameCard;
