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
import { useEffect } from "react";
const PlayMusic = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
  });
  return (
    <View style={Styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Header */}
        <View style={Styles.play_music__header_wrapper}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={Styles.play_music__header_arrow}
            name="chevron-down-outline"
          />
          <Text style={Styles.play_music__header_title}>Now playing</Text>
          <Ionicons
            style={Styles.play_music__header_menu}
            name="ellipsis-vertical"
          />
        </View>
        {/* Image */}
        <View style={Styles.play_music__image_wrapper}>
          <Image
            style={Styles.play_music__image}
            source={{
              uri: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
        {/* Information */}
        <View style={Styles.play_music__information_wrapper}>
          {/* Infor */}
          <View style={Styles.play_music__info_wrapper}>
            <Ionicons
              style={Styles.play_music__info_heart}
              name="heart-outline"
            />
            <View style={{ alignItems: "center" }}>
              <Text style={Styles.play_music__info_name}>Para Para</Text>
              <Text style={Styles.play_music__info_author}>Neerparavai</Text>
            </View>
            <Ionicons
              style={Styles.play_music__info_more}
              name="information-circle"
            />
          </View>
          {/* Progress Bar */}
          <View style={Styles.play_music__progress_wrapper}>
            <Text style={Styles.play_music__progress_current}>3:15</Text>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              style={{ flex: 1, marginHorizontal: 10 }}
              indeterminate={false}
              progress={0.5}
              color={ColorScheme.primary}
            />
            <Text style={Styles.play_music__progress_duration}>4:24</Text>
          </View>
        </View>
        {/* Control */}
        <View style={Styles.play_music__control_wrapper}>
          <Ionicons style={Styles.play_music__control_action} name="shuffle" />
          <Ionicons
            style={Styles.play_music__control_action}
            name="play-back"
          />
          <Ionicons
            style={Styles.play_music__control_pause}
            name="pause-circle-outline"
          />
          <Ionicons
            style={Styles.play_music__control_action}
            name="play-forward"
          />
          <Ionicons style={Styles.play_music__control_action} name="repeat" />
        </View>
        {/* Options */}
        <View style={Styles.play_music__options_wrapper}>
          <Ionicons
            style={Styles.play_music__options_icon}
            name="musical-notes"
          />
          <Ionicons style={Styles.play_music__options_icon} name="download" />
          <Ionicons
            style={Styles.play_music__options_icon}
            name="share-social"
          />
          <Ionicons style={Styles.play_music__options_icon} name="radio" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlayMusic;
