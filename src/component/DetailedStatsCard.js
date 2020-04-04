import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Color from '../util/Color';

export default DetailedStatsCard = (props) => {
  const {item} = props;

  return (
    <View style={styles.card}>
      <Text
        style={{
          color: 'grey',
          fontSize: 22,
          padding: 12,
          fontFamily: 'bold',
        }}>
        {item.state}
      </Text>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 12,
          }}>
          <Text
            style={{
              flex: 1,
              padding: 12,
              marginEnd: 12,
              backgroundColor: Color.light_red,
              borderRadius: 6,
              color: Color.black,
              fontSize: 18,
            }}>
            Confirmed{'\n'}
            <Text style={{fontFamily: 'bold'}}>{item.confirmed}</Text>
          </Text>
          <Text
            style={{
              flex: 1,
              padding: 12,
              marginStart: 12,
              backgroundColor: Color.light_blue,
              borderRadius: 6,
              color: Color.black,
              fontSize: 18,
            }}>
            Active{'\n'}
            <Text style={{fontFamily: 'bold'}}>{item.active}</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 12,
            marginHorizontal: 12,
          }}>
          <Text
            style={{
              flex: 1,
              padding: 12,
              marginEnd: 12,
              backgroundColor: Color.light_green,
              borderRadius: 6,
              color: Color.black,
              fontSize: 18,
            }}>
            Recovered{'\n'}
            <Text style={{fontFamily: 'bold'}}>{item.recovered}</Text>
          </Text>
          <Text
            style={{
              flex: 1,
              padding: 12,
              marginStart: 12,
              backgroundColor: Color.light_yellow,
              borderRadius: 6,
              color: Color.black,
              fontSize: 18,
            }}>
            Deaths{'\n'}
            <Text style={{fontFamily: 'bold'}}>{item.deaths}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 6,
    backgroundColor: 'rgba(253, 251, 251, 0.8)',
    justifyContent: 'space-between',
  },
});
