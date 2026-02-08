import CustomButton from "@/components/CustomButton/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View style={styles.logoContainer}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              style={styles.cards}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Descubra infinitas possibilidades com{" "}
                <Text style={styles.textBold}>Aora</Text>
              </Text>

              <Image
                source={images.path}
                style={styles.detail}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.text2}>
                Aonde criatividade encontra o mundo: Embarque em uma jornada
                ilimitada de criatividade
              </Text>
              <CustomButton
                title="Continue com o e-mail"
                handlePress={() => {
                  router.push("/sign-in");
                }}
                textStyles=""
                isLoading={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor={"#161622"} style="light" />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#161622",
    height: "100%",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  logo: {
    width: 130,
    height: 100,
  },
  cards: {
    width: 380,
    height: 298,
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    position: "relative",
    zIndex: 1,
  },
  textBold: {
    color: "#FF9C01",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  detail: {
    position: "absolute",
    bottom: -10,
    right: -10,
    width: 130,
    height: 10,
  },
  text2: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
