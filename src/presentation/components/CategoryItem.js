import { Image, Text, View } from "react-native";
import Styles from "../../core/style/Styles";

const CategoryItem = (props) => {
  return (
    <View style={Styles.categories__item_wrapper}>
      <Image
        style={Styles.categories__item_image}
        source={{
          uri: props.data.image,
        }}
      />
      <Text style={Styles.categories__title}>{props.data.title}</Text>
    </View>
  );
};

export default CategoryItem;
