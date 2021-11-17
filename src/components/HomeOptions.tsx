import React from "react";
import { FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { Feather as Icon } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { Text } from ".";
import { Box } from "./Theme";
import { HomeNavigationProps } from "./Navigation";

interface HomeOptionsProps {
  id: string;
  title: string;
  image: string;
  screen: string;
}
const data = [
  {
    id: "1",
    title: "Schedule",
    image: require("./assets/Navigation/2.jpg"),
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Direction",
    image: require("./assets/Navigation/1.jpg"),
    screen: "MapScreen",
  },
];

const HomeOptions = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-2 pl-6 bg-black pb-8 pt-4 m-2 w-40 rounded-xl`}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Box>
              <Image style={{ width: 120, height: 120 }} source={item.image} />
              <Text variant="title2" color="white">
                {item.title}
              </Text>
              <Box justifyContent="center">
                <Icon name="arrow-right" size={50} color="white" />
              </Box>
            </Box>
          </TouchableOpacity>
        )}
      />
    </Box>
  );
};

export default HomeOptions;