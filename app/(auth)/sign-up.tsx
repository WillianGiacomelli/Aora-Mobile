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

import CustomButton from "@/components/CustomButton/CustomButton";
import FormField from "@/components/FormField/FormField";
import { Link } from "expo-router";
import { useState } from "react";
import { images } from "../../constants";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const submitForm = () => {
    setIsLoading(true);
    console.log(form);
    setIsLoading(false);
  };

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

              <Text style={styles.text}>Cadastrar</Text>

              <FormField
                title="Nome de usuário"
                value={form.username}
                placeholder="Digite seu nome de usuário"
                handleChangeText={(e) => setForm({ ...form, username: e })}
                keyboardType="default"
              />

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

              <CustomButton
                title="Cadastrar"
                handlePress={submitForm}
                textStyles=""
                isLoading={isLoading}
              />

              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 20,
                }}
              >
                <Text style={styles.text2}>Já tem uma conta?</Text>
                <Link href="/sign-in" style={styles.text3}>
                  Entrar
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignUp;

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
  text2: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "thin",
  },
  text3: {
    color: "#FF9C01",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
