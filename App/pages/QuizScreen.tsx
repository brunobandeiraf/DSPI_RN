import React, {FC, useEffect, useState} from 'react';
import {Image, Pressable, Text, View, useWindowDimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import VStyles from '../styles/pages/vertical/QuizScreen.style';
import HStyles from '../styles/pages/horizontal/QuizScreen.style';

type QuizScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Quiz'
>;
type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: QuizScreenNavigationProp;
  route: QuizScreenRouteProp;
};

const QuizScreen: FC<Props> = ({route, navigation}) => {
  const {quizName, image, desc} = route.params;
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToQuiz = () => {
    navigation.navigate('Home');
  };

  return (
    <View
      style={
        orientation === 'portrait' ? VStyles.container : HStyles.container
      }>
      <Image
        source={{uri: `${image}`}}
        style={
          orientation === 'portrait' ? VStyles.gameImage : HStyles.gameImage
        }
      />
      <View
        style={
          orientation === 'portrait' ? VStyles.contentBox : HStyles.contentBox
        }>
        <View
          style={
            orientation === 'portrait'
              ? VStyles.textContainer
              : HStyles.textContainer
          }>
          <View
            style={
              orientation === 'portrait'
                ? VStyles.titleContainer
                : HStyles.titleContainer
            }>
            <Text
              style={
                orientation === 'portrait' ? VStyles.title : HStyles.title
              }>
              {quizName}
            </Text>
            <View
              style={
                orientation === 'portrait'
                  ? VStyles.pointsBox
                  : HStyles.pointsBox
              }>
              <Image source={require('../assets/star.png')} />
              <Text
                style={
                  orientation === 'portrait' ? VStyles.points : HStyles.points
                }>
                50
              </Text>
            </View>
          </View>
          <Text
            style={orientation === 'portrait' ? VStyles.desc : HStyles.desc}>
            {desc}
          </Text>
        </View>
        <Pressable
          onPress={() => goToQuiz()}
          style={
            orientation === 'portrait' ? VStyles.buttonBox : HStyles.buttonBox
          }>
          <Text
            style={
              orientation === 'portrait'
                ? VStyles.buttonText
                : HStyles.buttonText
            }>
            Comecar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default QuizScreen;
