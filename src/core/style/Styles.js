import { Dimensions, StyleSheet } from "react-native";
import ColorScheme from "./ColorScheme";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const Styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    backgroundColor: ColorScheme.background,
  },

  text_heading: {
    paddingVertical: 10,
    color: ColorScheme.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Slider
  slider__container: {
    flex: 1,
  },
  slider__wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
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
  // End Slider
});

export default Styles;
