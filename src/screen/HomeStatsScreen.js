import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';

import StatusBar from '../component/StatusBar';
import Header from '../component/Header';

import Color from '../util/Color';
import {APP_SCREEN} from '../util/Constant';

import HomeStatsCard from '../component/HomeStatsCard';
import dataAction from '../store/Action';

class HomeStatsScreen extends React.PureComponent {
  state = {
    totalStats: [
      {
        id: 0,
        count: '00',
      },
      {
        id: 1,
        count: '00',
      },
      {
        id: 2,
        count: '00',
      },
      {
        id: 3,
        count: '00',
      },
    ],
    stateWise: [],
    lastUpdated: 0,
    isRefresh: false,
    error: '',
  };

  _onPressMoreInfo = (index) => {
    this.props.navigation.navigate(APP_SCREEN.DETAILED_STATS_SCREEN, {
      index: index,
    });
  };

  _onPressAppInfo = () => {
    this.props.navigation.navigate(APP_SCREEN.APP_INFO_SCREEN);
  };

  _onRefresh = () => {
    this.props.fetchData();
  };

  componentDidMount() {
    this.props.fetchData();
  }

  static getDerivedStateFromProps(nextProps) {
    // console.log(nextProps);
    if (nextProps.data.data) {
      const data = nextProps.data.data.statewise[0];
      const upTime = data.lastupdatedtime;
      return {
        totalStats: [
          {
            id: 0,
            count: data.confirmed,
          },
          {
            id: 1,
            count: data.active,
          },
          {
            id: 2,
            count: data.recovered,
          },
          {
            id: 3,
            count: data.deaths,
          },
        ],
        isRefresh: nextProps.isRequesting,
        lastUpdated: upTime,
        error: nextProps.error,
      };
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header title="Covid19 Stats India" />

        <Text style={styles.textLastUpdate}>
          Last updated on : {this.state.lastUpdated}
        </Text>
        {this.state.error ? (
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
                onRefresh={() => this._onRefresh()}
                refreshing={this.state.isRefresh}
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
            data={this.state.totalStats}
            renderItem={({item, index}) => (
              <HomeStatsCard
                index={index}
                count={item.count}
                onPressMoreInfo={() => this._onPressMoreInfo(index)}
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
                onRefresh={() => this._onRefresh()}
                refreshing={this.state.isRefresh}
              />
            }
          />
        )}

        <TouchableOpacity
          onPress={() => this._onPressAppInfo()}
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
          <Text
            style={{color: Color.white, fontFamily: 'regular', fontSize: 20}}>
            App Info
          </Text>
          <Icon name="info-circle" size={22} color={Color.white} />
        </TouchableOpacity>
      </View>
    );
  }
}

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

const mapStateToProps = (store) => {
  return {
    isRequesting: store.dataReducer.isRequesting,
    data: store.dataReducer.response,
    error: store.dataReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (value) => {
      dispatch(dataAction(value, dispatch));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeStatsScreen);
