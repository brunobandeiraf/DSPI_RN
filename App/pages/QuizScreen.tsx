import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Quiz: {quizName?: string};
};

type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

type Props = {
  route: QuizScreenRouteProp;
};

const QuizScreen: React.FC<Props> = ({route}) => {
  const {quizName} = route.params;

  const renderQuizComponent = () => {
    if (quizName === 'AEIOU') {
      return <Text>AEIOU</Text>;
    } else if (quizName === 'ABCDE') {
      return <Text>ABCDE</Text>;
    } else {
      return <Text>Error</Text>;
    }
  };

  return <View>{renderQuizComponent()}</View>;
};

export default QuizScreen;
