import React from 'react';
import {View, StyleSheet} from 'react-native';

import StatusBar from '../component/StatusBar';
import Header from '../component/Header';

import Color from '../util/Color';

export default class AppInfoScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigate={this.props.navigation} title={'App info'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
});
