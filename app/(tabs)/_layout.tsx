import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

export default function TabLayout() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#161622" }}>
      <SafeAreaView style={{ height: "100%" }}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarShowLabel: true,
            tabBarLabelStyle: {
              fontFamily: "Poppins-Medium",
              fontSize: 12,
              marginTop: 4,
            },
            tabBarIconStyle: {
              marginTop: 12,
            },
            tabBarStyle: {
              backgroundColor: "#161622",
              borderTopWidth: 1,
              borderTopColor: "#232533",
              height: 80,
            },
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: "Início", // Nome nativo
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Image
                  source={icons.home}
                  tintColor={color}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="bookmark"
            options={{
              title: "Salvos",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Image
                  source={icons.bookmark}
                  tintColor={color}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="create"
            options={{
              title: "Criar",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Image
                  source={icons.plus}
                  tintColor={color}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="profile"
            options={{
              title: "Perfil",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Image
                  source={icons.profile}
                  tintColor={color}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />
        </Tabs>
        <StatusBar backgroundColor={"#161622"} style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
