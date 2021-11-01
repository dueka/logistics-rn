import React, { useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  divide,
  interpolateColors,
  multiply,
} from "react-native-reanimated";
import { onScrollEvent, useScrollHandler, useValue } from "react-native-redash";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
// interface ComponentNameProps {}

const BORDER_RADIUS = 75;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(100, 200, 300, 0.5)",
  },
});

const slides = [
  {
    title: "Optimized",
    subtitle: "We Always Deliver.",
    description: "The best delivery drivers you have ever seen",
    color: "rgba(191,234,245,1)",
  },
  {
    title: "Delivery",
    subtitle: "Last mile delivery serivce.",
    description: "Carrying your packages for you. ",
    color: "rgba(190,236,196,1)",
  },
  {
    title: "Service",
    subtitle: "Quality Drivers.",
    description: "Delivering more than parcels.",
    color: "rgba(255,228,217,1)",
  },
  //   {
  //     title: "Service.",
  //     subtitle: "Stress-Free Deliveries.",
  //     description: "Delivering more than parcels.",
  //     color: "rgba(255,221,221,1)",
  //   },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  // const x = useValue(0);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColors(x, {
    inputRange: slides.map((_, i) => i * width),
    outputColorRange: slides.map((slide) => slide.color),
  }) as any;
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              // width: width * slides.length,
              // width: width,
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description, x }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
