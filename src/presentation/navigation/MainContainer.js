import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ColorScheme from "../../core/style/ColorScheme";
import Home from "./Home";
import Trending from "./Trending";
import Search from "./Search";
import Favourite from "./Favourite";
const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: ColorScheme.primary,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Trending") {
              iconName = focused ? "flame" : "flame-outline";
            } else if (rn === "Favourite") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (rn === "Search") {
              iconName = focused ? "search" : "search-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MainContainer;
