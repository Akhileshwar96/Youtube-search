import {
  GET_YOUTUBE_VIDEO_SUCCESS,
  GET_YOUTUBE_VIDEO_FAILED,
  GET_YOUTUBE_VIDEO_LIST_SUCCESS,
  GET_YOUTUBE_VIDEO_LIST_FAILED,
  GET_YOUTUBE_VIDEO_LIST_LOADING,
} from '../actions/Types';

export const intialState = {
  nextPageToken: '',
  videoList: {},
  isVideoListLoading: true,
};

const AppReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_YOUTUBE_VIDEO_SUCCESS: {
      return {
        ...state,
        nextPageToken: action.payload,
      };
    }
    case GET_YOUTUBE_VIDEO_FAILED: {
      return action.payload;
    }
    case GET_YOUTUBE_VIDEO_LIST_LOADING: {
      return {
        ...state,
        isVideoListLoading: true,
      };
    }
    case GET_YOUTUBE_VIDEO_LIST_SUCCESS: {
      return {
        ...state,
        videoList: action.payload,
        isVideoListLoading: false,
      };
    }
    case GET_YOUTUBE_VIDEO_LIST_FAILED: {
      return {
        ...state,
        sVideoListLoading: false,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
