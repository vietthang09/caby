import { Image, Text, View } from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const TrendingItem = (props) => {
  return (
    <View style={Styles.trending__item_wrapper}>
      <View style={{ position: "relative"}}>
        <Image
          style={Styles.trending__item_image}
          source={{
            uri: props.data.fields.image_Url,
          }}
        />
        <Ionicons
          onPress={() => props.navigation.navigate("PlayMusicStack")}
          style={Styles.trending__item_play}
          name="play-circle-outline"
        />
      </View>
    </View>
  );
};

export default TrendingItem;
