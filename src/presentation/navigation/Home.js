import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Styles from "../../core/style/Styles";
import Slider from "../components/Slider";
import CategoriesSection from "../container/CatecoriesSection";
import TrendingSectionList from "../container/TrendingSectionList";
const Home = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Slider Section */}
        <Slider />

        {/* Trending Section */}
        <View>
          <Text style={Styles.text__heading}>Top Trending</Text>
          <TrendingSectionList navigation={navigation} />
        </View>

        {/* Categories Section */}
        <View>
          <Text style={Styles.text__heading}>Categories</Text>
          <CategoriesSection />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
