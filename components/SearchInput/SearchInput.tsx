import { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../../constants";

const SearchInput = ({
  value,
  placeholder,
  handleChangeText,
  keyboardType,
}: {
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  keyboardType: "email-address" | "numeric" | "default";
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", position: "relative" }}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          value={value}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity>
          <Image
            source={icons.search}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#232329",
    padding: 10,
    paddingVertical: 20,
    width: "100%",
    borderRadius: 20,
    position: "relative",
    borderWidth: 1,
    borderColor: "#232329",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputFocused: {
    borderColor: "#FF9C01",
  },
  icon: {
    position: "absolute",
    right: 12,
    top: -40,
    width: 24,
    height: 24,
  },
});
