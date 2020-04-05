import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';

import StatusBar from '../component/StatusBar';
import Header from '../component/Header';

import Color from '../util/Color';
import {APP_SCREEN} from '../util/Constant';

import HomeStatsCard from '../component/HomeStatsCard';

const HomeStatsScreen = (props) => {
  const [stats, setStats] = useState({
    totalStats: [
      {
        id: 0,
        count: '--',
      },
      {
        id: 1,
        count: '--',
      },
      {
        id: 2,
        count: '--',
      },
      {
        id: 3,
        count: '--',
      },
    ],
    stateWiseStats: [],
    lastUpdateTime: '',
    isRequestDone: false,
    error: '',
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (stats.isRequestDone === false) {
      getData();
    }
  }, []);

  const _onRefresh = () => {
    setStats({
      isRequestDone: false,
    });
    setIsRefreshing(true);
    getData();
  };

  const _onPressAppInfo = () => {
    props.navigation.navigate(APP_SCREEN.APP_INFO_SCREEN);
  };

  const _onPressMoreInfo = () => {
    if (stats.stateWiseStats.length != 0) {
      props.navigation.navigate(APP_SCREEN.DETAILED_STATS_SCREEN, {
        data: stats.stateWiseStats,
      });
    }
  };

  const getData = () => {
    axios
      .get('https://api.covid19india.org/data.json')
      .then((response) => {
        const data = response.data.statewise;
        setStats({
          totalStats: [
            {
              id: 0,
              count: data[0].confirmed,
            },
            {
              id: 1,
              count: data[0].active,
            },
            {
              id: 2,
              count: data[0].recovered,
            },
            {
              id: 3,
              count: data[0].deaths,
            },
          ],
          stateWiseStats: data,
          lastUpdateTime: data[0].lastupdatedtime,
          error: '',
          isRequestDone: true,
        });
        setIsRefreshing(false);
      })
      .catch((error) => {
        setStats({
          totalStats: [
            {
              id: 0,
              count: '--',
            },
            {
              id: 1,
              count: '--',
            },
            {
              id: 2,
              count: '--',
            },
            {
              id: 3,
              count: '--',
            },
          ],
          stateWiseStats: [],
          lastUpdateTime: '',
          error: error,
          isRequestDone: true,
        });
        setIsRefreshing(false);
      });
  };

  function tConvert(timestamp) {
    let data = timestamp.substring(0, timestamp.indexOf(' '));
    let time = timestamp.substring(timestamp.indexOf(' ') + 1);
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? ' AM' : ' PM';
      time[0] = +time[0] % 12 || 12;
    }
    return data + ' ' + time.join('');
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="Covid19 Stats India" />

      <Text style={styles.textLastUpdate}>
        Last updated on :{' '}
        {stats.lastUpdateTime
          ? tConvert(stats.lastUpdateTime)
          : 'xx/xx/xxxx xx:xx:xx'}
      </Text>
      {stats.error ? (
        <ScrollView
          contentContainerStyle={{flex: 1, justifyContent: 'center'}}
          refreshControl={
            <RefreshControl
              colors={[
                Color.dark_red,
                Color.dark_blue,
                Color.dark_green,
                Color.dark_yellow,
              ]}
              onRefresh={() => _onRefresh()}
              refreshing={isRefreshing}
            />
          }>
          <Text style={styles.textError}>
            Some error occurred, Please try again!
          </Text>
        </ScrollView>
      ) : (
        <FlatList
          numColumns={2}
          contentContainerStyle={{margin: 10}}
          data={stats.totalStats}
          renderItem={({item, index}) => (
            <HomeStatsCard
              index={index}
              count={item.count}
              onPressMoreInfo={() =>
                _onPressMoreInfo(stats.stateWiseStats, props)
              }
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          refreshControl={
            <RefreshControl
              colors={[
                Color.dark_red,
                Color.dark_blue,
                Color.dark_green,
                Color.dark_yellow,
              ]}
              onRefresh={() => _onRefresh()}
              refreshing={isRefreshing}
            />
          }
        />
      )}

      <TouchableOpacity
        onPress={() => _onPressAppInfo(props)}
        activeOpacity={0.8}
        style={{
          borderRadius: 6,
          marginVertical: 12,
          marginHorizontal: 14,
          flexDirection: 'row',
          padding: 12,
          backgroundColor: 'grey',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: Color.white, fontFamily: 'regular', fontSize: 20}}>
          App Info
        </Text>
        <Icon name="info-circle" size={22} color={Color.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  textLastUpdate: {
    paddingHorizontal: 16,
    fontFamily: 'regular',
    color: Color.black,
  },
  textError: {
    color: 'grey',
    fontFamily: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default HomeStatsScreen;
