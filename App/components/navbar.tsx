import React, {useEffect, useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native'; // Atualize com o caminho correto

import VStyles from '../styles/components/vertical/Navbar.style';
import HStyles from '../styles/components/horizontal/Navbar.style';

const Navbar = () => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  return (
    <View
      style={
        orientation === 'portrait' ? VStyles.navbarBox : HStyles.navbarBox
      }>
      <Text>FNDFL</Text>
    </View>
  );
};

export default Navbar;
