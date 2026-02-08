import {
  Alert,
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
import { signIn } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import { useState } from "react";
import { images } from "../../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    setIsLoading(true);
    try {
      const result = await signIn(form.email, form.password);
      console.log(result);
      router.replace("/home");
    } catch (error: any) {
      console.log(error);
      Alert.alert("Erro", error.message || "Erro ao criar conta");
    } finally {
      setIsLoading(false);
    }
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

              <CustomButton
                title="Entrar"
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
                <Text style={styles.text2}>Não tem uma conta?</Text>
                <Link href="/sign-up" style={styles.text3}>
                  Cadastrar
                </Link>
              </View>
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
