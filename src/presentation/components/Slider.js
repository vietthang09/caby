import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import sliderData from "../../../assets/datas/sliderData";
import Styles from "../../core/style/Styles";

const Slider = () => {
  const [imgActive, setimgActive] = useState(0);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={Styles.slider__container}>
      <View style={Styles.wrap}>
        {/* Images */}
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={Styles.slider__wrap}
        >
          {sliderData.map((e, index) => {
            return (
              <Image
                key={index}
                resizeMode="cover"
                style={Styles.slider__wrap}
                source={{
                  uri: e.image,
                }}
              />
            );
          })}
        </ScrollView>

        {/* Dots */}
        <View style={Styles.slider__wrap_dot}>
          {sliderData.map((e, index) => {
            return (
              <Text
                key={index}
                style={
                  imgActive == index
                    ? Styles.slider__dot_active
                    : Styles.slider__dot
                }
              >
                _
              </Text>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Slider;
