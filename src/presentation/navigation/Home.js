import { ScrollView, Text, View } from "react-native";
import Styles from "../../core/style/Styles";
import Slider from "../components/Slider";
import TrendingItem from "../components/TrendingItem";
import TrendingSectionList from "../container/TrendingSectionList";

const Home = () => {
  return (
    <View style={Styles.container}>
      <ScrollView>
        {/* Slider Section */}
        <Slider />
        {/* Trending Section */}
        <View>
          <Text style={Styles.text__heading}>Top Trending</Text>
          <TrendingSectionList />
        </View>
        {/* Categories Section */}
        <Text style={Styles.text__heading}>Categories</Text>
      </ScrollView>
    </View>
  );
};
export default Home;
