import React from 'react';
import {View, StyleSheet} from 'react-native';

import StatusBar from '../component/StatusBar';
import Header from '../component/Header';

import Color from '../util/Color';
import {STATS_STATUS} from '../util/Constant';

export default class DetailedStatsScreen extends React.PureComponent {
  render() {
    const {index} = this.props.route.params;

    let title = 'Detailed Stats';
    Object.keys(STATS_STATUS).forEach(k => {
      if (k == index) {
        title = STATS_STATUS[k] + ' Cases';
      }
    });

    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigate={this.props.navigation} title={title} />
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
