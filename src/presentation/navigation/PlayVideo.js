import {
  Image,
  ProgressBarAndroid,
  ScrollView,
  Text,
  View,
} from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import ColorScheme from "../../core/style/ColorScheme";
import { Video, AVPlaybackStatus } from "expo-av";
import React, { useState } from "react";
const PlayVideo = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [selectedResolution, setSelectedResolution] = React.useState(0);
  return (
    <View style={Styles.play_video__wrapper}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Video */}
        <View>
          <Video
            ref={video}
            style={Styles.play_video__video_wrapper}
            source={{
              uri: "http://videocdn.bodybuilding.com/video/mp4/62000/62792m.mp4",
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
        {/* Detail */}
        <View style={Styles.play_video__detail_wrapper}>
          {/* Title */}
          <Text style={Styles.play_video__detail_title}>
            Chingiz - Truth - Azerbaijan - LIVE - Second Semi-Final - Eurovision
            2019
          </Text>
          {/* Information */}
          <View style={Styles.play_vieo__detail_info_wrapper}>
            <Text style={Styles.play_video__detail_info_views}>
              3,094,505 views
            </Text>
            <Text style={Styles.play_video__detail_info_publish}>
              May 16, 2019
            </Text>
          </View>
          {/* Resolution */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={Styles.play_video__resolution_wrapper}
          >
            <Text style={Styles.play_video__resolution_item}>144p</Text>
            <Text style={Styles.play_video__resolution_item}>240p</Text>
            <Text style={Styles.play_video__resolution_item}>360p</Text>
            <Text style={Styles.play_video__resolution_item_active}>480p</Text>
            <Text style={Styles.play_video__resolution_item}>720p</Text>
            <Text style={Styles.play_video__resolution_item}>1080p</Text>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
export default PlayVideo;
