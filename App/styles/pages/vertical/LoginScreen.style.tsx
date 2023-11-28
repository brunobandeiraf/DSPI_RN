import {StyleSheet} from 'react-native';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const VStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
//     backgroundColor: "red",

  },
  firstCont: {
    paddingTop: 40,
    alignItems: "center",
    gap: 10
  },
  title:{
    fontSize: 38,
    color: "#FB3131",
    fontWeight: "700"

  },
  subtitle: {
    fontSize: 24,
    color: "#FB3131",
    fontWeight: "700"
  },
  registerOut:{
    backgroundColor: "#FB3131",
    width: width,
//     borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    gap: 10
  },
  registerText1:{
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },
  registerText2:{
    color: "white",
    fontSize: 18,
    fontWeight: "700"
  }
});

export default VStyles;
