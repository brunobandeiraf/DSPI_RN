import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

  const goToQuiz = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Image source={{uri: `${image}`}} />
      <View>
        <View>
          <View>
            <Text>{quizName}</Text>
            <Image source={require('../assets/star.png')} />
          </View>
          <Text>{desc}</Text>
        </View>
        <Pressable onPress={() => goToQuiz()}>
          <Text> Comecar </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default QuizScreen;
