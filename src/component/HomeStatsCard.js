import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import {calculatedHeight, calculatedWidth} from '../util/Dimensions';
import Color from '../util/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default HomeStatsCard = (props) => {
  const {index, count, onPressMoreInfo} = props;

  let customCardStyle = {};
  let customTitleStyle = {};
  let source;
  let title = 'Stats';

  switch (index) {
    case 0:
      customCardStyle = {
        backgroundColor: Color.light_red,
      };
      customTitleStyle = {
        color: Color.dark_red,
      };
      source = require('../image/virus.png');
      title = 'Confirmed';
      break;
    case 1:
      customCardStyle = {
        backgroundColor: Color.light_blue,
      };
      customTitleStyle = {
        color: Color.dark_blue,
      };
      source = require('../image/patient.png');
      title = 'Active';
      break;
    case 2:
      customCardStyle = {
        backgroundColor: Color.light_green,
      };
      customTitleStyle = {
        color: Color.dark_green,
      };
      source = require('../image/heart.png');
      title = 'Recovered';
      break;
    case 3:
      customCardStyle = {
        backgroundColor: Color.light_yellow,
      };
      customTitleStyle = {
        color: Color.dark_yellow,
      };
      source = require('../image/poison.png');
      title = 'Deaths';
      break;
  }

  return (
    <View style={[styles.card, customCardStyle]}>
      <TouchableOpacity
        onPress={onPressMoreInfo}
        style={{
          height: '100%',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 68, height: 68, alignSelf: 'center', margin: 8}}
          source={source}
        />
        <Text style={[styles.textCount, customTitleStyle]}>{count}</Text>
        <Text style={[styles.textTitle, customTitleStyle]}>{title}</Text>

        <Text
          style={{
            fontFamily: 'bold',
            color: 'grey',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#F0F0F0',
            borderRadius: 24,
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginTop: 12,
          }}>
          More info
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: calculatedHeight(34),
    margin: 4,
    borderRadius: 6,
  },
  textCount: {
    fontFamily: 'regular',
    fontSize: 48,
    width: '100%',
    textAlign: 'center',
  },
  textTitle: {
    fontFamily: 'regular',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
  },
});
