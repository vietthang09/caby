import { FlatList, ScrollView, Text, View } from "react-native";
import Styles from "../../core/style/Styles";
import CategoryItem from "../components/CategoryItem";
import categoriesData from "../../../assets/datas/categoriesData";

const CategoriesSection = () => {
  return (
    <View style={Styles.categories__wrapper}>
      <FlatList
        data={categoriesData}
        renderItem={({ item }) => <CategoryItem data={item} />}
        numColumns={2}
      />
    </View>
  );
};
export default CategoriesSection;
