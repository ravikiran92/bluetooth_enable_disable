import { useState, useEffect } from 'react';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';

const useBluetoothState = () => {
  const [bluetoothState, setBluetoothState] = useState('Unknown');

  useEffect(() => {
    const checkBluetoothState = async () => {
      const state = await BluetoothStateManager.getState();
      setBluetoothState(state);
    };

    // Initial state check
    checkBluetoothState();

    // Listen for Bluetooth state changes
    const listener = BluetoothStateManager.onStateChange((state) => {
      setBluetoothState(state);
    });

    // Cleanup listener on unmount
    return () => {
      listener.remove();
    };
  }, []);

  const enableBluetooth = async () => {
    try {
      const result = await BluetoothStateManager.requestToEnable();
      return result;
    } catch (error) {
      console.error('Error enabling Bluetooth:', error);
      return false;
    }
  };

  const disableBluetooth = async () => {
    try {
      await BluetoothStateManager.disable();
      return true;
    } catch (error) {
      console.error('Error disabling Bluetooth:', error);
      return false;
    }
  };

  const openBluetoothSettings = () => {
    BluetoothStateManager.openSettings();
  };

  return {
    bluetoothState,
    enableBluetooth,
    disableBluetooth,
    openBluetoothSettings,
  };
};

export default useBluetoothState;
