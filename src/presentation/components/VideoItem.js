import { Image, Text, TouchableOpacity, View } from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const VideoItem = (props) => {
  return (
    <View style={Styles.music__item_wrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("PlayVideoStack")}
      >
        <Image
          style={Styles.music__item_image}
          source={{
            uri: props.data.thumbnail,
          }}
        />
      </TouchableOpacity>
      <View style={Styles.video__item_body_wrapper}>
        <Text numberOfLines={2} style={Styles.music__item_title}>
          {props.data.title}
        </Text>
        <Text style={Styles.music__item_views}>
          {props.data.viewCountText} plays
        </Text>
      </View>
    </View>
  );
};

export default VideoItem;
