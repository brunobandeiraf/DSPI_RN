import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {BleManager, Device} from 'react-native-ble-plx';

interface BluetoothProps {
  devices: Device[];
  startScanning: () => void;
}

const BluetoothContext = createContext<BluetoothProps | undefined>(undefined);

interface BluetoothProviderProps {
  children: ReactNode;
}

export const BluetoothProvider: React.FC<BluetoothProviderProps> = ({
  children,
}) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const manager = new BleManager();

  useEffect(() => {
    const subscription = manager.onStateChange(state => {
      if (state === 'PoweredOn') {
        startScanning();
      }
    }, true);

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manager]);

  const startScanning = async () => {
    try {
      manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.error(error);
          return;
        }

        if (device) {
          setDevices(prevDevices => [...prevDevices, device]);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const value: BluetoothProps = {
    devices,
    startScanning,
  };

  return (
    <BluetoothContext.Provider value={value}>
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
