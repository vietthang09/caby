import { Image, Text, TouchableOpacity, View } from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const VideoItem = (props) => {
  return (
    <View style={Styles.music__item_wrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("PlayVideo")}
      >
        <Image
          style={Styles.music__item_image}
          source={{
            uri: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
      </TouchableOpacity>
      <View style={Styles.music__item_body_wrapper}>
        <View>
          <Text style={Styles.music__item_title}>Oru Devathai</Text>
          <Text style={Styles.music__item_views}>2.5 M plays</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="ellipsis-vertical-outline"
            style={Styles.music__item_menu}
          />
        </View>
      </View>
    </View>
  );
};

export default VideoItem;
