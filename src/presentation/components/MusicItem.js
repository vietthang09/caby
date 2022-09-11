import { Image, Text, TouchableOpacity, View } from "react-native";
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import ColorScheme from "../../core/style/ColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
const MusicItem = (props) => {
  const [addFavourite, setAddFavourite] = useState(false);
  const _addFavourite = async () => {
    try {
      // await AsyncStorage.setItem("music", JSON.stringify(props.data));
      setAddFavourite(!addFavourite);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={Styles.music__item_wrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("PlayMusicStack")}
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
            onPress={() => props.navigation.navigate("PlayMusicStack")}
            style={Styles.music__item_title}
          >
            {props.data.fields.name}
          </Text>
          <Text style={Styles.music__item_views}>
            {props.data.fields.listeningFrequency} plays
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => _addFavourite()}>
          <Ionicons
            name={addFavourite ? "heart" : "heart-outline"}
            style={[
              Styles.music__item_favourite,
              { color: addFavourite ? ColorScheme.primary : ColorScheme.white },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MusicItem;
