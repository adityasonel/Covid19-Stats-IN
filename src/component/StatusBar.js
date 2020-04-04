import React from 'react';
import {View, StatusBar, Platform} from 'react-native';

import Color from '../util/Color';

const AppStatusBar = props => {
  const height = Platform.OS === 'ios' ? 26 : 0;
  return (
    <View style={{height: height}}>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
    </View>
  );
};

export default AppStatusBar;
