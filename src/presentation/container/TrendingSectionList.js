import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { listMusic } from "../../core/api/Api";
import TrendingItem from "../components/TrendingItem";
import * as API from "../../core/api/Api";
import ColorScheme from "../../core/style/ColorScheme";
const TrendingSectionList = (props) => {
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
    <View>
      {isLoading ? (
        <ActivityIndicator color={ColorScheme.primary} />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data.records}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            return <TrendingItem data={item} navigation={props.navigation} />;
          }}
        />
      )}
    </View>
  );
};
export default TrendingSectionList;
