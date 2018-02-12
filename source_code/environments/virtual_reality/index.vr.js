import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

// import Ava from './base'
import withVirtualReality from './decorator'

export default class virtual_reality extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        {withVirtualReality(/*new Ava()*/) }
      </View>
    );
  }
};

AppRegistry.registerComponent('virtual_reality', () => virtual_reality);
