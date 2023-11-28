/* eslint-disable @typescript-eslint/no-unused-vars */
import {RouteProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-react-native';
import Navbar from '../components/navbar';

type TestScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Test'
>;
type TestScreenRouteProp = RouteProp<RootStackParamList, 'Test'>;

type Props = {
  navigation: TestScreenNavigationProp;
  route: TestScreenRouteProp;
};

const TestScreen: FC<Props> = ({route, navigation}) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <View>
        <Text>Test Screen</Text>
      </View>
    </>
  );
};

export default TestScreen;
