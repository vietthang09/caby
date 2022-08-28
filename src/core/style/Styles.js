import { Dimensions, StatusBar, StyleSheet } from "react-native";
import ColorScheme from "./ColorScheme";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const Styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    backgroundColor: ColorScheme.background,
    marginTop: StatusBar.currentHeight,
  },

  text__heading: {
    paddingVertical: 10,
    color: ColorScheme.white,
    fontSize: 20,
    fontWeight: "bold",
  },

  text__title: {
    color: ColorScheme.secondary,
    fontSize: 16,
    fontWeight: "600",
  },
  text__sub_title: {
    color: ColorScheme.white,
    fontSize: 13,
    fontWeight: "500",
  },
  text__tiny: {
    color: ColorScheme.white,
    fontSize: 11,
    fontWeight: "500",
  },

  // Slider Section
  slider__container: {
    flex: 1,
  },
  slider__wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    borderRadius: 8,
  },
  slider__wrap_dot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  slider__dot_active: {
    margin: 3,
    fontSize: 23,
    color: ColorScheme.primary,
  },
  slider__dot: {
    margin: 3,
    fontSize: 23,
    color: "white",
  },
  // End Slider Section

  // Trending Section
  trending__item_wrapper: {
    alignContent: "center",
    marginEnd: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  trending__item_image: {
    width: HEIGHT * 0.25,
    height: HEIGHT * 0.25,
    resizeMode: "cover",
    borderRadius: 16,
  },
  trending__item_play: {
    color: ColorScheme.white,
    fontSize: 23,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  // End Trending Section

  // Categoris Section
  categories__wrapper: {
    position: "relative",
  },
  categories__item_wrapper: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 10,
    alignItems: "center",
  },
  categories__item_image: {
    width: HEIGHT * 0.25,
    height: HEIGHT * 0.25,
    resizeMode: "cover",
    borderRadius: 16,
  },
  categories__title: {
    color: ColorScheme.white,
    fontSize: 18,
    fontWeight: "700",
    position: "absolute",
  },
  // End Categories Section

  // Music Item
  music__item_wrapper: {
    marginTop: 10,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  music__item_image: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 8,
  },
  music__item_body_wrapper: {
    marginLeft: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  music__item_title: {
    color: ColorScheme.white,
    fontSize: 16,
    fontWeight: "700",
  },
  music__item_views: {
    marginTop: 5,
    color: ColorScheme.white,
    fontSize: 11,
    fontWeight: "100",
  },
  music__item_favourite: {
    fontSize: 26,
    color: ColorScheme.white,
  },
  music__item_menu: {
    marginLeft: 10,
    fontSize: 14,
    color: ColorScheme.white,
  },
  // End Music Item

  // Search Screen
  search_bar__wrapper: {
    backgroundColor: ColorScheme.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 5,
  },
  search_bar__icon: {
    fontSize: 18,
    color: ColorScheme.gray,
    marginEnd: 10,
  },
  search_result__wrapper: {
    marginTop: 10,
  },
  // End Search Screen
});

export default Styles;
