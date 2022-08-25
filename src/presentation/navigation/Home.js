import { ScrollView, Text, View } from "react-native";
import Styles from "../../core/style/Styles";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <View style={Styles.container}>
      <ScrollView>
        {/* Slider */}
        <Slider />
        {/* Trending */}
        <Text style={Styles.text_heading}>Top Trending</Text>
        {/* Categories */}
        <Text style={Styles.text_heading}>Categories</Text>
      </ScrollView>
    </View>
  );
};
export default Home;
