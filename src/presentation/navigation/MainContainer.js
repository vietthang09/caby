import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ColorScheme from "../../core/style/ColorScheme";
import Favourite from "./Favourite";
import Home from "./Home";
import PlayMusic from "./PlayMusic";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from "./Search";
import Trending from "./Trending";
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="PlayMusic"
        component={PlayMusic}
      />
    </HomeStack.Navigator>
  );
}

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MainContainer;
