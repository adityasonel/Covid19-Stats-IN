import React from 'react';
import {View, StyleSheet, Text, ScrollView, Linking, Alert} from 'react-native';

import StatusBar from '../component/StatusBar';
import Header from '../component/Header';

import Color from '../util/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class AppInfoScreen extends React.PureComponent {
  _onPressApiLink = async () => {
    let url = 'https://github.com/covid19india/api';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  _onPressFlaticonLink = async () => {
    let url = 'https://www.flaticon.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  _onPressDevLink = async () => {
    let url = 'https://adityasonel.github.io';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigate={this.props.navigation} title={'App info'} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: 'rgba(253, 251, 251, 0.8)',
              margin: 12,
              padding: 12,
              borderRadius: 6,
            }}>
            <Text style={{color: 'grey', fontFamily: 'bold', fontSize: 18}}>
              What is this app about
            </Text>
            <Text
              selectable={true}
              style={{color: Color.black, marginTop: 16, fontSize: 18}}>
              Covid19 Stats India is a sample React Native application 📱 built
              to demonstrate use of Modern React Native development tools.
              {'\n\n'}It simply loads Total COVID19 cases in India from
              COVID19-India API.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'rgba(253, 251, 251, 0.8)',
              margin: 12,
              padding: 12,
              borderRadius: 6,
            }}>
            <Text style={{color: 'grey', fontFamily: 'bold', fontSize: 18}}>
              Credits
            </Text>
            <Text
              selectable={true}
              style={{color: Color.black, marginTop: 16, fontSize: 18}}>
              Special thanks to COVID19-India API team for there precious work
              for creating and maintaining this database.{'\n\n'}A
              volunteer-driven API for COVID-19 stats & patient tracing in India
              (Unofficial).{'\n\n'}For more info about COVID19-India API, click
              this link{' '}
              <Text
                onPress={() => this._onPressApiLink()}
                style={{color: 'blue', textDecorationLine: 'underline'}}>
                https://github.com/covid19india/api
              </Text>
              {'\n\n'}
              And also this app would not have been possible without the React
              Native framework, the open source projects tht I've used and the
              tireless efforts of developers and contributers in the React
              Native community.{'\n\n'}Credits for icons used in this project is
              goes to it's respective designer. To check more awesome icons,
              click here{' '}
              <Text
                onPress={() => this._onPressFlaticonLink()}
                style={{color: 'blue', textDecorationLine: 'underline'}}>
                https://www.flaticon.com
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this._onPressDevLink()}
            style={{justifyContent: 'center', alignContent: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                padding: 6,
                fontFamily: 'bold',
                textDecorationLine: 'underline',
                letterSpacing: 1,
              }}>
              {'< >'} by aditya
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
