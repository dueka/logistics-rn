import React from "react";
import { View, Text } from "react-native";
import { Box } from ".";

interface ContainerProps {
  children: ReactNode;
}

const Container = () => {
  return (
    <Box flex={1}>
      <Box>{/* <Image />  */}</Box>
    </Box>
  );
};

export default Container;
