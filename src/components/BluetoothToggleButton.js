// /src/components/BluetoothToggleButton.js

import React from 'react';
import { Button, Alert } from 'react-native';
import useBluetoothState from '../hooks/useBluetoothState';

const BluetoothToggleButton = () => {
  const {
    bluetoothState,
    enableBluetooth,
    disableBluetooth,
    openBluetoothSettings,
  } = useBluetoothState();

  const handleToggleBluetooth = async () => {
    if (bluetoothState === 'PoweredOff') {
      const result = await enableBluetooth();
      if (result) {
        Alert.alert('Bluetooth is now ON!');
      } else {
        Alert.alert('User denied Bluetooth enable request!');
      }
    } else if (bluetoothState === 'PoweredOn') {
      const result = await disableBluetooth();
      if (result) {
        Alert.alert('Bluetooth is now OFF!');
      } else {
        Alert.alert(
          'To disable Bluetooth',
          'You need to manually turn off Bluetooth from your device settings.',
          [
            {
              text: 'Go to Settings',
              onPress: openBluetoothSettings,
            },
            { text: 'Cancel', style: 'cancel' },
          ]
        );
      }
    }
  };

  return <Button title="Toggle Bluetooth" onPress={handleToggleBluetooth} />;
};

export default BluetoothToggleButton;
