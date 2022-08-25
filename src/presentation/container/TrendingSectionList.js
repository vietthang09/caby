import { ScrollView } from "react-native";
import TrendingItem from "../components/TrendingItem";

const TrendingSectionList = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
    </ScrollView>
  );
};
export default TrendingSectionList;
