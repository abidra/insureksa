import React from 'react';
import { View } from 'react-native';
import Insureksa from './src/Insureksa';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f68b1f' }}>
        <Insureksa />
      </View>
    );
  }
}
