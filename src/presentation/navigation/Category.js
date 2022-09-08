import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import * as API from "../../core/api/Api";
import ColorScheme from "../../core/style/ColorScheme";
import Styles from "../../core/style/Styles";
import MusicItem from "../components/MusicItem";
const Category = ({ route, navigation }) => {
  const { id, title } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMusics = async () => {
    try {
      const response = await API.listMusic(id);
      console.log(response);
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
        <View>
          <Text style={Styles.text__heading}>{title}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.records}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
              return <MusicItem data={item} />;
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Category;
