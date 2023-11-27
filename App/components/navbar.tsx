import React, {useEffect, useState} from 'react';
import {Button, Text, View, useWindowDimensions, Alert} from 'react-native';
import {useBluetooth} from '../context/BluetoothContext'; // Atualize com o caminho correto

import VStyles from '../styles/components/vertical/Navbar.style';
import HStyles from '../styles/components/horizontal/Navbar.style';

const Navbar = () => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');
  const {startScanning, devices} = useBluetooth();

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const handleScanDevices = () => {
    startScanning();
  };

  const showDevicesAlert = () => {
    Alert.alert(
      'Dispositivos Bluetooth',
      devices.map(device => device.name || 'Unknown Device').join('\n'),
    );
  };

  return (
    <View
      style={
        orientation === 'portrait' ? VStyles.navbarBox : HStyles.navbarBox
      }>
      <Button onPress={handleScanDevices} title="Scan Devices" />
      <Button onPress={showDevicesAlert} title="Show Devices" />
      <Text>FNDFL</Text>
    </View>
  );
};

export default Navbar;
