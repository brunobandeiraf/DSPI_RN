import React from 'react';
import {Image, View} from 'react-native';

type cardProps = {
  styles: any;
  image: string;
};

const GameCard = (props: cardProps) => {
  const styles: any = props.styles;

  return (
    <View style={styles.gameCard}>
      <Image
        style={styles.gameImage}
        source={{
          uri: `${props.image}`,
        }}
      />
    </View>
  );
};

export default GameCard;
