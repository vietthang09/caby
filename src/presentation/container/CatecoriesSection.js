import { FlatList, ScrollView, Text, View } from "react-native";
import Styles from "../../core/style/Styles";
import CategoryItem from "../components/CategoryItem";
import categoriesData from "../../../assets/datas/categoriesData";

const CategoriesSection = (props) => {
  return (
    <View style={Styles.categories__wrapper}>
      <FlatList
        data={categoriesData}
        renderItem={({ item }) => (
          <CategoryItem navigation={props.navigation} data={item} />
        )}
        numColumns={2}
      />
    </View>
  );
};
export default CategoriesSection;
