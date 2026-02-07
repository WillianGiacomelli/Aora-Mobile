import { Stack } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <Stack screenOptions={{ headerShown: false }} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
