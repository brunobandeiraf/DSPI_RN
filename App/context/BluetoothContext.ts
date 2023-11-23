import React, { createContext, useContext, useState, useEffect, ReactNode, FunctionComponent } from 'react';
import { BleManager } from 'react-native-ble-plx';

interface BluetoothContextProps {
  bleManager: BleManager;
}

const BluetoothContext = createContext<BluetoothContextProps | undefined>(undefined);

interface BluetoothProviderProps {
  children: ReactNode;
}

export const BluetoothProvider: FunctionComponent<BluetoothProviderProps> = ({ children }) => {
  const [bleManager, setBleManager] = useState(new BleManager());

  useEffect(() => {
    return () => {
      // Cleanup
    };
  }, []);

  const bluetoothContextValue: BluetoothContextProps = {
    bleManager,
  };

  return (
    <BluetoothContext.Provider value={bluetoothContextValue}>
      {children}
    </BluetoothContext.Provider>
  );
};

export const useBluetooth = () => {
  const context = useContext(BluetoothContext);
  if (!context) {
    throw new Error('useBluetooth must be used within a BluetoothProvider');
  }
  return context;
};

