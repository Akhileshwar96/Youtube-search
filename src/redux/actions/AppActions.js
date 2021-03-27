import HttpBaseClient from '../../utils/httpClient/httpBaseClient';
import {
  GET_YOUTUBE_VIDEO_SUCCESS,
  GET_YOUTUBE_VIDEO_LIST_SUCCESS,
  GET_YOUTUBE_VIDEO_LIST_LOADING,
} from './Types';
import {BASE_URL} from '../../utils/httpClient/url';

export const searchYoutubeVideo = data => {
  const params = {
    q: data,
  };
  return dispatch => {
    dispatch({type: GET_YOUTUBE_VIDEO_LIST_LOADING});
    return HttpBaseClient.get(BASE_URL, params)
      .then(response => {
        console.log('response', response);
        let originalResponse = response.items;
        dispatch({
          type: GET_YOUTUBE_VIDEO_SUCCESS,
          payload: response.nextPageToken,
        });
        dispatch({
          type: GET_YOUTUBE_VIDEO_LIST_SUCCESS,
          payload: originalResponse,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const loadMoreVideo = data => {
  const params = {
    q: data.searchInput,
    pageToken: data.nextPageToken,
  };
  return (dispatch, getState) => {
    const {videoList} = getState().dataState;
    return HttpBaseClient.get(BASE_URL, params)
      .then(response => {
        console.log('response', response);
        dispatch({
          type: GET_YOUTUBE_VIDEO_SUCCESS,
          payload: response.nextPageToken,
        });
        let originalResponse = response.items;
        let olderResponse = videoList;
        console.log('newresponse', olderResponse, originalResponse);
        let newResponse = [...olderResponse, ...originalResponse];
        dispatch({
          type: GET_YOUTUBE_VIDEO_LIST_SUCCESS,
          payload: newResponse,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
