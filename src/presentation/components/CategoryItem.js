import { Image, Text, TouchableOpacity, View } from "react-native";
import Styles from "../../core/style/Styles";

const CategoryItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.navigation.navigate("Category", {
          id: props.data.id,
          title: props.data.title,
        });
      }}
      style={Styles.categories__item_wrapper}
    >
      <Image style={Styles.categories__item_image} source={props.data.image} />
      <Text style={Styles.categories__title}>{props.data.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
