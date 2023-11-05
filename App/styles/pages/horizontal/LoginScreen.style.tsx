import {StyleSheet} from 'react-native';

const HStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 52,
    fontFamily: 'TitanOne-Regular',
    color: '#FF5858',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'TitanOne-Regular',
    color: '#49E9FF',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  forms: {
    display: 'flex',
    width: '80%',
  },
  inputBox: {
    display: 'flex',
    gap: 5,
    marginBottom: 10,
  },
  inputLabel: {
    fontFamily: 'TitanOne-Regular',
    color: '#49E9FF',
  },
  input: {
    display: 'flex',
    fontFamily: 'default',
    borderColor: '#FF5858',
    borderWidth: 3,
    borderRadius: 10,
    height: 45,
    paddingLeft: 10,
  },
  otherBox: {
    display: 'flex',
    marginTop: 15,
  },
  registerContainer: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
  },
  register: {
    fontFamily: 'TitanOne-Regular',
    color: '#49E9FF',
    textDecorationLine: 'underline',
  },
  loginBox: {
    display: 'flex',
    marginTop: 15,
  },
  loginContainer: {
    backgroundColor: '#FF5858',
  },
  login: {
    fontFamily: 'TitanOne-Regular',
    color: '#ffffff',
  },
});

export default HStyles;
