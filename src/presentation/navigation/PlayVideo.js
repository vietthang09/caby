import {
  ActivityIndicator,
  AppState,
  FlatList,
  Image,
  ProgressBarAndroid,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import ColorScheme from "../../core/style/ColorScheme";
import { Video } from "expo-av";
import React, { useState, useEffect, useRef } from "react";
import { streamVideo } from "../../core/api/Api";
import * as API from "../../core/api/Api";
const PlayVideo = ({ route }) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisibale, setAppStateVisible] = useState(appState.current);

  const [isLoading, setLoading] = useState(true);
  const { data, setData } = route.params;
  const [videoLink, setVideoLink] = useState();
  const [videoStream, setVideoStream] = useState([]);
  const [resolution, setResolution] = useState();
  const [status, setStatus] = useState([]);

  const streamVideo = async () => {
    try {
      const response = await API.streamVideo(data.id);
      setVideoLink(response.data[0].url);
      return setVideoStream(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const changeResolution = (itag) => {
    setResolution(itag);
    let currentPosition = status.positionMillis;
    switch (itag) {
      case 17:
        setVideoLink(videoStream[0].url);
        status.seekMillisToleranceAfter(currentPosition);
        break;
      case 18:
        setVideoLink(videoStream[1].url);
        status.seekMillisToleranceAfter(currentPosition);
        break;
      case 22:
        setVideoLink(videoStream[2].url);
        status.seekMillisToleranceAfter(currentPosition);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      ToastAndroid.show("background time", ToastAndroid.SHORT);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    streamVideo();
  }, []);
  return (
    <View style={Styles.play_video__wrapper}>
      {isLoading ? (
        <ActivityIndicator color={ColorScheme.primary} />
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false}>
          {/* Video */}
          <View>
            <Video
              style={Styles.play_video__video_wrapper}
              source={{ uri: videoLink }}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
          </View>
          {/* Detail */}
          <View style={Styles.play_video__detail_wrapper}>
            {/* Title */}
            <Text style={Styles.play_video__detail_title}>{data.title}</Text>
            {/* Information */}
            <View style={Styles.play_vieo__detail_info_wrapper}>
              <Text style={Styles.play_video__detail_info_views}>
                {data.viewCountText} views
              </Text>
              <Text style={Styles.play_video__detail_info_publish}>
                {data.publishedTimeText}
              </Text>
            </View>
            {/* Resolution */}
            <FlatList
              style={Styles.play_video__resolution_wrapper}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={videoStream}
              renderItem={({ item }) => {
                return (
                  <Text
                    onPress={() => {}}
                    style={Styles.play_video__resolution_item}
                  >
                    {item.qualityLabel}
                  </Text>
                );
              }}
            />
            <Text>{status.positionMillis}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default PlayVideo;
