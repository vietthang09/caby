import { Image, Text, TouchableOpacity, View } from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
const MusicItem = (props) => {
  return (
    <View style={Styles.music__item_wrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("PlayMusic")}
      >
        <Image
          style={Styles.music__item_image}
          source={{
            uri: props.data.fields.image_Url,
          }}
        />
      </TouchableOpacity>
      <View style={Styles.music__item_body_wrapper}>
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={2}
            onPress={() => props.navigation.navigate("PlayMusic")}
            style={Styles.music__item_title}
          >
            {props.data.fields.name}
          </Text>
          <Text style={Styles.music__item_views}>
            {props.data.fields.listeningFrequency} plays
          </Text>
        </View>
        <Ionicons name="heart-outline" style={Styles.music__item_favourite} />
      </View>
    </View>
  );
};
export default MusicItem;
