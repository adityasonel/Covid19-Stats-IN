import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import StatusBar from '../component/StatusBar';
import Header from '../component/Header';
import DetailedStatsCard from '../component/DetailedStatsCard';

import Color from '../util/Color';

export default class DetailedStatsScreen extends React.PureComponent {
  render() {
    let {data} = this.props.route.params;
    let d = data.filter((r) => r.state != 'Total');

    let title = 'Detailed Stats';

    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigate={this.props.navigation} title={title} />

        <FlatList
          contentContainerStyle={{margin: 10, paddingBottom: 20}}
          data={d}
          renderItem={({item, index}) => <DetailedStatsCard item={item} />}
          keyExtractor={(item) => item.statecode}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        />
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
