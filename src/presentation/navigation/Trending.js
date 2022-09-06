import MusicItem from "../components/MusicItem";
import Styles from "../../core/style/Styles";
const { Text, View, ScrollView } = require("react-native");

const Trending = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MusicItem navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Trending;
