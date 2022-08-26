import { Image, Text, View } from "react-native";
import Styles from "../../core/style/Styles";

const TrendingItem = () => {
  return (
    <View style={Styles.trending__item_wrapper}>
      <Image
        style={Styles.trending__item_image}
        source={{
          uri: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <Text style={Styles.text__title}>Arabic kuthus</Text>
      <Text style={Styles.text__sub_title}>Beast</Text>
    </View>
  );
};

export default TrendingItem;
