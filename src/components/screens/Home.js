/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Button from '../molecules/Button';
import CustomTextInput from '../molecules/CustomTextInput';
import VideoCard from '../molecules/VideoCard';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#D5D9F6',
  },
  searchBarStyle: {
    flexDirection: 'row',
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  textInput: {
    flex: 3,
    marginRight: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 30,
    fontSize: 15,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderWidth: 0,
    elevation: 4,
    backgroundColor: '#f595b8',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      videoList: [],
      isLoading: this.props.videoList === true ? true : false,
    };
  }
  onInputChange = text => {
    this.setState({searchInput: text});
  };

  onFinishEditing = () => {
    console.log('Editing done');
  };
  onSearchPress = () => {
    console.log('search pressed', this.state.searchInput);
    const {searchYoutubeVideo} = this.props;
    const {searchInput} = this.state;
    searchYoutubeVideo(searchInput);
  };

  loadMoreVideo = () => {
    const {searchInput} = this.state;
    const {loadMoreVideo, nextPageToken} = this.props;
    const data = {
      searchInput,
      nextPageToken,
    };
    loadMoreVideo(data);
  };

  _renderListItem(item) {
    console.log('printItemforflatlist', item);
    const data = item.item.snippet;
    return (
      <VideoCard
        title={data.title}
        channelName={data.channelTitle}
        thumbnailUrl={data.thumbnails.default.url}
      />
    );
  }

  render() {
    const {searchInput} = this.state;
    const {videoList, isVideoListLoading} = this.props;
    console.log('searchImout', searchInput, this.props);
    return (
      <View style={[styles.container]}>
        <View style={[styles.searchBarStyle]}>
          <CustomTextInput
            value={searchInput}
            onChangeText={this.onInputChange}
            onEndEditing={this.onFinishEditing}
            containerStyle={[styles.textInput]}
            placeholder={'Search'}
          />
          <Button
            name={'search'}
            onPress={this.onSearchPress}
            buttonStyle={[styles.button]}
          />
        </View>
        {!isVideoListLoading ? (
          <FlatList
            data={videoList}
            renderItem={this._renderListItem}
            keyExtractor={item => item.id.videoId}
            onEndReachedThreshold={0.5}
            onEndReached={this.loadMoreVideo}
          />
        ) : (
          <Text style={[styles.textStyle]}>Search your video</Text>
        )}
      </View>
    );
  }
}

export default Home;
