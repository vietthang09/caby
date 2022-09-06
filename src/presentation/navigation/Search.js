import { SafeAreaView } from "react-native";
import * as API from "../../core/api/Api";

const { Text, View, TextInput, ScrollView } = require("react-native");
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import VideoItem from "../components/VideoItem";
import { useEffect, useState } from "react";
import useDebounce from "../Hooks/useDebounce";
const Search = ({ navigation }) => {
  const [value, setValue] = useState();
  const query = useDebounce(value, 1500);
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(query);
  }, [query]);
  const fetchData = async (query) => {
    if (query) {
      const data = await API.searchVideo(query);
      return setData(data);
    }
  };

  console.log(data);

  return (
    <View style={Styles.container}>
      {/* Search bar */}
      <View style={Styles.search_bar__wrapper}>
        <Ionicons style={Styles.search_bar__icon} name="search-outline" />
        <TextInput
          keyboardType=""
          style={{ width: "100%" }}
          placeholder="Search"
          value={value}
          onChangeText={(val) => setValue(val)}
        />
      </View>
      {/* Search results */}
      <View style={Styles.search_result__wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VideoItem navigation={navigation} />
          <VideoItem navigation={navigation} />
          <VideoItem navigation={navigation} />
          <VideoItem navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
