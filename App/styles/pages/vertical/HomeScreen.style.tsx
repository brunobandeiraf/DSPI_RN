import {StyleSheet} from 'react-native';

const VStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  gameCard: {
    display: 'flex',
    width: 300,
    aspectRatio: 1 / 0.5,
    borderRadius: 10,
  },
  gameImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default VStyles;
