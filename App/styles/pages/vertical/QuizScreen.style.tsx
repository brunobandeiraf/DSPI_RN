import {StyleSheet} from 'react-native';

const HStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  gameImage: {
    width: '100%',
    height: '35%',
    marginBottom: 10,
  },
  contentBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 52,
    fontFamily: 'TitanOne-Regular',
    color: '#FF5858',
  },
  pointsBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  points: {
    fontSize: 52,
    fontFamily: 'TitanOne-Regular',
    color: '#ED8A19',
  },
  desc: {
    fontSize: 20,
    fontFamily: 'TitanOne-Regular',
    color: '#49E9FF',
    textAlign: 'justify',
    width: '90%',
  },
  buttonBox: {
    position: 'absolute',
    backgroundColor: '#FF5858',
    width: '80%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
    bottom: '-35%',
  },
  buttonText: {
    fontFamily: 'TitanOne-Regular',
    color: '#ffffff',
    fontSize: 20,
  },
});

export default HStyles;
