import Styles from "../../core/style/Styles";
import MusicItem from "../components/MusicItem";

const { Text, View, ScrollView } = require("react-native");

const Favourite = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MusicItem navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Favourite;
