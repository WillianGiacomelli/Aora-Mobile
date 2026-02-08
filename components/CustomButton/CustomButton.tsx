import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  textStyles,
  isLoading,
}: {
  title: string;
  handlePress: () => void;
  textStyles: string;
  isLoading: boolean;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
      style={styles.container}
    >
      <Text style={styles.text} className={`${textStyles}`}>
        {isLoading ? "Carregando..." : title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF9C01",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
