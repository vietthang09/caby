const { Text, View, TextInput, ScrollView } = require("react-native");
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MusicItem from "../components/MusicItem";
const Search = () => {
  return (
    <View style={Styles.container}>
      {/* Search bar */}
      <View style={Styles.search_bar__wrapper}>
        <Ionicons style={Styles.search_bar__icon} name="search-outline" />
        <TextInput placeholder="Search" />
      </View>
      {/* Search results */}
      <View style={Styles.search_result__wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MusicItem />
          <MusicItem />
          <MusicItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
