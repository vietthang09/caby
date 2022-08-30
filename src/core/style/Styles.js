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
    fontSize: 32,
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

  // Play Music Screen
  play_music__header_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  play_music__header_arrow: {
    color: ColorScheme.white,
    fontSize: 24,
  },
  play_music__header_title: {
    color: ColorScheme.white,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: ColorScheme.primary,
    fontSize: 13,
    fontWeight: "700",
  },
  play_music__header_menu: {
    color: ColorScheme.primary,
    fontSize: 24,
  },
  play_music__image_wrapper: {
    marginVertical: 16,
  },
  play_music__image: {
    width: "100%",
    height: WIDTH - 20,
    borderRadius: 16,
  },
  play_music__information_wrapper: {
    paddingHorizontal: 10,
  },
  play_music__info_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  play_music__info_heart: {
    color: ColorScheme.white,
    fontSize: 24,
  },
  play_music__info_name: {
    color: ColorScheme.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  play_music__info_author: {
    color: ColorScheme.white,
    fontSize: 11,
    fontWeight: "100",
  },
  play_music__info_more: {
    color: ColorScheme.white,
    fontSize: 24,
  },
  play_music__progress_wrapper: {
    marginTop: 10,
    flexDirection: "row",
  },
  play_music__progress_current: {
    color: ColorScheme.white,
    fontSize: 13,
  },
  play_music__progress_duration: {
    color: ColorScheme.white,
    fontSize: 13,
  },
  play_music__control_wrapper: {
    marginTop: 24,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  play_music__control_action: {
    color: ColorScheme.white,
    fontSize: 26,
  },
  play_music__control_pause: {
    color: ColorScheme.primary,
    fontSize: 52,
  },
  play_music__options_wrapper: {
    marginTop: 24,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  play_music__options_icon: {
    color: ColorScheme.white,
    fontSize: 18,
  },
  // End Play Music Screen
});

export default Styles;
