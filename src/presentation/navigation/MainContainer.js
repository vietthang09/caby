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
import PlayVideo from "./PlayVideo";
import Category from "./Category";
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
        name="HomeStack"
        component={Home}
      />
      <HomeStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="PlayMusicStack"
        component={PlayMusic}
      />
      <HomeStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="CategoryStack"
        component={Category}
      />
    </HomeStack.Navigator>
  );
}

const TrendingStack = createNativeStackNavigator();
function TrendingStackScreen() {
  return (
    <TrendingStack.Navigator screenOptions={{ headerShown: false }}>
      <TrendingStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="TrendingStack"
        component={Trending}
      />
      <TrendingStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="PlayMusicStack"
        component={PlayMusic}
      />
    </TrendingStack.Navigator>
  );
}

const FavouriteStack = createNativeStackNavigator();
function FavouriteStackScreen() {
  return (
    <FavouriteStack.Navigator screenOptions={{ headerShown: false }}>
      <FavouriteStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="FavouriteStack"
        component={Favourite}
      />
      <FavouriteStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="PlayMusicStack"
        component={PlayMusic}
      />
    </FavouriteStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();
function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="SearchStack"
        component={Search}
      />
      <SearchStack.Screen
        options={{
          statusBarColor: ColorScheme.background,
          navigationBarColor: ColorScheme.background,
        }}
        name="PlayVideoStack"
        component={PlayVideo}
      />
    </SearchStack.Navigator>
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
        <Tab.Screen name="Trending" component={TrendingStackScreen} />
        <Tab.Screen name="Favourite" component={FavouriteStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MainContainer;
