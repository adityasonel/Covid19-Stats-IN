import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import {calculatedHeight, calculatedWidth} from '../util/Dimensions';
import Color from '../util/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default HomeStatsCard = (props) => {
  const {index, count, deltaCount, onPressMoreInfo} = props;

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
          padding: 12,
        }}>
        <Image
          style={{width: 52, height: 52, alignSelf: 'center'}}
          source={source}
        />
        <Text style={[styles.textCount, customTitleStyle]}>{count}</Text>
        <Text style={[styles.textDeltaCount, customTitleStyle]}>
          {deltaCount == '--' || deltaCount == 0
            ? '[--]'
            : '[+' + deltaCount + ']'}
        </Text>
        <Text style={[styles.textTitle, customTitleStyle]}>{title}</Text>

        <Text
          style={{
            fontFamily: 'bold',
            color: 'grey',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#F0F0F0',
            borderRadius: 16,
            paddingVertical: 6,
            paddingHorizontal: 12,
            marginTop: 8,
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
    fontFamily: 'bold',
    fontSize: calculatedWidth(10),
    width: '100%',
    textAlign: 'center',
  },
  textDeltaCount: {
    fontFamily: 'bold',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  textTitle: {
    fontFamily: 'regular',
    marginTop: 8,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
  },
});
