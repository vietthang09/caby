import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import * as API from "../../core/api/Api";

const { Text, View, TextInput, ScrollView } = require("react-native");
import Styles from "../../core/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import VideoItem from "../components/VideoItem";
import { useEffect, useState } from "react";
import useDebounce from "../Hooks/useDebounce";
import ColorScheme from "../../core/style/ColorScheme";
const Search = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState();
  const query = useDebounce(value, 1500);
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(query);
  }, [query]);
  const fetchData = async (query) => {
    if (query) {
      try {
        const data = await API.searchVideo(query);
        return setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      setData([]);
    }
  };

  return (
    <View style={Styles.container}>
      {/* Search bar */}
      <View style={Styles.search_bar__wrapper}>
        <Ionicons style={Styles.search_bar__icon} name="search-outline" />
        <TextInput
          keyboardType="web-search"
          style={{ width: "100%" }}
          placeholder="Search"
          value={value}
          onChangeText={(val) => setValue(val)}
        />
      </View>
      {/* Search results */}
      {isLoading ? (
        <></>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            return <VideoItem data={item} navigation={navigation} />;
          }}
        />
      )}
    </View>
  );
};

export default Search;
