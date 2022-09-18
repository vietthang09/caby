import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import Styles from "../../core/style/Styles";
import ColorScheme from "../../core/style/ColorScheme";
import { Video } from "expo-av";
import React, { useState, useEffect } from "react";
import * as API from "../../core/api/Api";
const PlayVideo = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const { data, setData } = route.params;
  const [videoLink, setVideoLink] = useState();
  const [videoStream, setVideoStream] = useState([]);
  const [resolution, setResolution] = useState(17);
  const [status, setStatus] = useState({});
  const videoPlayer = React.useRef();
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
        break;
      case 18:
        setVideoLink(videoStream[1].url);
        break;
      case 22:
        setVideoLink(videoStream[2].url);
        break;

      default:
        break;
    }
  };

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
              resizeMode="cover"
              useNativeControls
              shouldPlay
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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
            <ScrollView
              style={Styles.play_video__resolution_wrapper}
              horizontal
            >
              <Text
                onPress={() => changeResolution(17)}
                style={
                  resolution == 17
                    ? Styles.play_video__resolution_item_active
                    : Styles.play_video__resolution_item
                }
              >
                144p
              </Text>
              <Text
                onPress={() => changeResolution(18)}
                style={
                  resolution == 18
                    ? Styles.play_video__resolution_item_active
                    : Styles.play_video__resolution_item
                }
              >
                360p
              </Text>
              <Text
                onPress={() => changeResolution(22)}
                style={
                  resolution == 22
                    ? Styles.play_video__resolution_item_active
                    : Styles.play_video__resolution_item
                }
              >
                720p
              </Text>
            </ScrollView>

            {/* Channel Info */}
            <View style={Styles.play_video__channel_wrapper}>
              <Image
                style={Styles.video__item_thumnail_channel}
                source={{
                  uri: data.thumbnailChannel,
                }}
              />
              <Text style={Styles.play_video__channel_name}>
                {data.ownerChannelText}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default PlayVideo;
