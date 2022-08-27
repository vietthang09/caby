import Styles from "../../core/style/Styles";
import MusicItem from "../components/MusicItem";

const { Text, View, ScrollView } = require("react-native");

const Favourite = () => {
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

export default Favourite;
