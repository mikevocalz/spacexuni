import React from 'react';
import { Platform } from 'react-native'
import { NativeBaseProvider, Text, Box } from 'native-base';
import { height } from 'styled-system';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff"
        alignItems="center"
        justifyContent="center" >
        <Text >Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}