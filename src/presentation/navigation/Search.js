const { Text, View, TextInput, ScrollView } = require("react-native");
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import VideoItem from "../components/VideoItem";
const Search = () => {
  return (
    <View style={Styles.container}>
      {/* Search bar */}
      <View style={Styles.search_bar__wrapper}>
        <Ionicons style={Styles.search_bar__icon} name="search-outline" />
        <TextInput keyboardType="" style={{width: "100%"}} placeholder="Search" />
      </View>
      {/* Search results */}
      <View style={Styles.search_result__wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
