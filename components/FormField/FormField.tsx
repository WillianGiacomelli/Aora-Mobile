import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  keyboardType,
}: {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  keyboardType: "email-address" | "numeric" | "default";
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={{ width: "100%" }}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          value={value}
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title === "Senha"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 20,
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
    borderWidth: 1,
    borderColor: "red",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputFocused: {
    borderColor: "#FF9C01",
  },
});
