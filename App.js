// /src/App.js

import React from 'react';
import { View, Text } from 'react-native';
import useBluetoothState from './src/hooks/useBluetoothState';
import BluetoothToggleButton from './src/components/BluetoothToggleButton';

const App = () => {
  const { bluetoothState } = useBluetoothState();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bluetooth State: {bluetoothState}</Text>
      <BluetoothToggleButton />
    </View>
  );
};

export default App;
