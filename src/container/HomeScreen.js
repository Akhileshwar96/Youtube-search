import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from '../components/screens/Home';
import {searchYoutubeVideo, loadMoreVideo} from '../redux/actions/AppActions';

const mapStateToProps = state => {
  const {
    searchResponse,
    videoList,
    isVideoListLoading,
    nextPageToken,
  } = state.dataState;

  return {
    searchResponse,
    videoList,
    isVideoListLoading,
    nextPageToken,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchYoutubeVideo,
      loadMoreVideo,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
