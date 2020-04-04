import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Color from '../util/Color';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BackIcon = navigate => {
  if (navigate) {
    return (
      <Icon
        name="chevron-left"
        size={22}
        color={Color.black}
        style={{marginBottom: 4}}
      />
    );
  }
  return null;
};

const _onPressBack = navigate => {
  if (navigate) {
    navigate.goBack();
  }
};

const Header = props => {
  let {navigate, title} = props;
  return (
    <TouchableOpacity
      style={{paddingVertical: 8, paddingHorizontal: 12}}
      onPress={() => _onPressBack(navigate)}>
      {BackIcon(navigate)}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Color.black,
    fontFamily: 'bold',
    fontSize: 36,
  },
});

export default Header;
