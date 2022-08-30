import { ScrollView } from "react-native";
import TrendingItem from "../components/TrendingItem";

const TrendingSectionList = (props) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <TrendingItem navigation={props.navigation} />
    </ScrollView>
  );
};
export default TrendingSectionList;
