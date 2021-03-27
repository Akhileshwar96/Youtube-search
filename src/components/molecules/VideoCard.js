/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    paddingVertical: 3,
  },
  imageStyle: {
    width: '45%',
    height: 100,
  },
  titleStyle: {
    fontSize: 17,
    color: 'black',
  },
  channelStyle: {
    fontSize: 15,
    color: 'gray',
  },
});

export default class VideoCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    channelName: PropTypes.string,
    thaumnail: PropTypes.string,
    isLoading: PropTypes.bool,
    containerStyle: PropTypes.string,
    imageStyle: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    channelName: '',
    thumbnailUrl: '',
    isLoading: false,
    containerStyle: styles.containerStyle,
    imageStyle: styles.imageStyle,
    channelStyle: styles.channelStyle,
    titleStyle: styles.titleStyle,
  };

  render() {
    const {
      title,
      channelName,
      thumbnailUrl,
      containerStyle,
      imageStyle,
      titleStyle,
      channelStyle,
    } = this.props;
    return (
      <View style={[containerStyle]}>
        <Image
          source={{
            uri: thumbnailUrl,
          }}
          style={[imageStyle]}
        />
        <View style={{paddingLeft: 7, flex: 1}}>
          <Text style={titleStyle} ellipsizeMode="tail" numberOfLines={3}>
            {title}
          </Text>
          <Text style={{fontSize: 12, color: 'gray'}}>{channelName}</Text>
        </View>
      </View>
    );
  }
}
