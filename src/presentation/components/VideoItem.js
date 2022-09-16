import { Image, Text, TouchableOpacity, View } from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const VideoItem = (props) => {
  return (
    <View style={Styles.video__item_wrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          props.navigation.navigate("PlayVideoStack", {
            data: props.data,
          })
        }
      >
        <Image
          style={Styles.video__item_image}
          source={{
            uri: props.data.thumbnail,
          }}
        />
        <Text style={Styles.video__item_duration}>
          {props.data.lengthTextSimpleText}
        </Text>
      </TouchableOpacity>
      <View style={Styles.video__item_body_wrapper}>
        <Image
          style={Styles.video__item_thumnail_channel}
          source={{
            uri: props.data.thumbnailChannel,
          }}
        />
        <View style={Styles.video__item_info_wrapper}>
          <Text numberOfLines={2} style={Styles.video__item_title}>
            {props.data.title}
          </Text>
          <Text style={Styles.video__item_views}>
            {props.data.ownerChannelText} | {props.data.publishedTimeText} | {props.data.viewCountText} plays
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VideoItem;
