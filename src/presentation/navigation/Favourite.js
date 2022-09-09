import { useEffect, useState } from "react";
import Styles from "../../core/style/Styles";
import MusicItem from "../components/MusicItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
const {
  Text,
  View,
  ScrollView,
  ToastAndroid,
  FlatList,
} = require("react-native");

const Favourite = ({ navigation }) => {
  const [favouriteMusic, setFavouriteMusic] = useState([]);
  const isFocused = useIsFocused();
  const getFavouriteMusics = async () => {
    try {
      const value = await AsyncStorage.getItem("music");
      console.log(value);
      if (value !== null) {
        setFavouriteMusic(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFavouriteMusics();
  }, [isFocused]);
  return (
    <View style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </View>
  );
};

export default Favourite;
