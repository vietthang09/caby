import { Image, Text, View } from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
const MusicItem = () => {
  return (
    <View style={Styles.music__item_wrapper}>
      <Image
        style={Styles.music__item_image}
        source={{
          uri: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <View style={Styles.music__item_body_wrapper}>
        <View>
          <Text style={Styles.music__item_title}>Oru Devathai</Text>
          <Text style={Styles.music__item_views}>2.5 M plays</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="heart-outline" style={Styles.music__item_favourite} />
          <Ionicons
            name="ellipsis-vertical-outline"
            style={Styles.music__item_menu}
          />
        </View>
      </View>
    </View>
  );
};
export default MusicItem;
