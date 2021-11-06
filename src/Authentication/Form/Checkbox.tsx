import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "../../components";
import { RectButton } from "react-native-gesture-handler";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  //   const [checked, setChecked] = useState(defaultValue);
  return (
    <RectButton onPress={() => onChange()} style={{ justifyContent: "center" }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="secondary"
          backgroundColor={checked ? "secondary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
