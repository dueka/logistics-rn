import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "232",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "343",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            color="white"
            size={18}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
