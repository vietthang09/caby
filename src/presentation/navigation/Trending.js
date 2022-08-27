import MusicItem from "../components/MusicItem";
import Styles from "../../core/style/Styles";
const { Text, View, ScrollView } = require("react-native");

const Trending = () => {
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MusicItem />
        <MusicItem />
        <MusicItem />
        <MusicItem />
        <MusicItem />
        <MusicItem />
        <MusicItem />
      </ScrollView>
    </View>
  );
};

export default Trending;
