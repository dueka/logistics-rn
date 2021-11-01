import React from "react";
import { Text } from "react-native";
import Animated, {
  Extrapolate,
  interpolateNode,
} from "react-native-reanimated";

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  // interpolate has been renamed as interpolateNode
  const opacity = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolateNode(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: "#2CB9B0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        transform: [{ scale }],
      }}
    >
      <Text></Text>
    </Animated.View>
  );
};

export default Dot;
