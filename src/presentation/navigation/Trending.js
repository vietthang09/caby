import React, { useEffect, useState } from "react";
import MusicItem from "../components/MusicItem";
import Styles from "../../core/style/Styles";
import * as API from "../../core/api/Api";
import { listMusic } from "../../core/api/Api";
import ColorScheme from "../../core/style/ColorScheme";
const {
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} = require("react-native");

const Trending = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMusics = async () => {
    try {
      const response = await API.listMusic("appkIMo6DC6fqO2KK");
      return setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMusics();
  }, []);
  return (
    <View style={Styles.container}>
      {isLoading ? (
        <ActivityIndicator color={ColorScheme.primary} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.records}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            return <MusicItem data={item} />;
          }}
        />
      )}
    </View>
  );
};

export default Trending;
