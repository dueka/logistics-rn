import React, { forwardRef, RefObject } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Box, useTheme } from "../../components";

interface TextInputProps extends RNTextInputProps {
  touched?: boolean;
  error?: string;
  icon: string;
}

const TextInput = forwardRef(
  ({ icon, touched, error, ...props }: TextInputProps, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "text" : error ? "danger" : "secondary";
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}
        padding="s"
      >
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{ ref }}
            {...props}
          />
        </Box>
        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            backgroundColor={!error ? "secondary" : "danger"}
            style={{ borderRadius: SIZE / 2 }}
          >
            <Icon
              name={!error ? "check" : "x"}
              color="white"
              size={16}
              style={{ textAlign: "center " }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
