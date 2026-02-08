import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import FormField from "@/components/FormField/FormField";
import { useState } from "react";
import { images } from "../../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: "#161622", height: "100%" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
              <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
              />

              <Text style={styles.text}>Login</Text>

              <FormField
                title="Email"
                value={form.email}
                placeholder="Digite seu email"
                handleChangeText={(e) => setForm({ ...form, email: e })}
                keyboardType="email-address"
              />

              <FormField
                title="Senha"
                value={form.password}
                placeholder="Digite sua senha"
                handleChangeText={(e) => setForm({ ...form, password: e })}
                keyboardType="default"
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80%",
    paddingHorizontal: 16,
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "semibold",
    marginTop: 20,
    marginBottom: 20,
  },
});
