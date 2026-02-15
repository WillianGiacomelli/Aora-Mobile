import CustomButton from "@/components/CustomButton/CustomButton";
import FormField from "@/components/FormField/FormField";
import { icons } from "@/constants";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [play, setPlay] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  const player = useVideoPlayer(form.video, (player) => {
    player.loop = false;
  });

  React.useEffect(() => {
    if (form.video) {
      player.play();
    } else {
      player.pause();
    }
  }, [form.video]);
  React.useEffect(() => {
    const subscription = player.addListener("playToEnd", () => {
      setPlay(false);
    });
    return () => {
      subscription.remove();
    };
  }, [player]);

  const openPicker = async (type: "video" | "thumbnail") => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        type === "video"
          ? ImagePicker.MediaTypeOptions.Videos
          : ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: type === "video" ? [4, 3] : [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setForm((prev) => ({
        ...prev,
        [type]: result.assets[0],
      }));
    } else {
      setTimeout(() => {
        Alert.alert("Document picker cancelled");
      }, 1000);
    }
  };

  const handleCreate = () => {
    if (!form.title || !form.video || !form.thumbnail || !form.prompt) {
      Alert.alert("Por favor, preencha todos os campos");
      return;
    }
    setUploading(true);

    try {
      Alert.alert("Criando vídeo...", JSON.stringify(form));
      router.push("/");
    } catch (error) {
      Alert.alert("Erro ao criar vídeo", JSON.stringify(error));
    } finally {
      setForm({
        title: "",
        video: null,
        thumbnail: null,
        prompt: "",
      });
      setUploading(false);
    }
  };
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: "#161622",
        height: "100%",
        padding: 16,
      }}
    >
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <ScrollView>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Create
          </Text>
          <FormField
            title="Título"
            value={form.title}
            placeholder="Título"
            handleChangeText={(e) => setForm({ ...form, title: e })}
            keyboardType="default"
          />
          <FormField
            title="Prompt"
            value={form.prompt}
            placeholder="Prompt"
            handleChangeText={(e) => setForm({ ...form, prompt: e })}
            keyboardType="default"
          />
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Adicionar vídeo
            </Text>

            <TouchableOpacity
              onPress={() => openPicker("video")}
              style={{
                width: "100%",
                height: 200,
                backgroundColor: "#232329",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {form.video ? (
                <VideoView
                  source={{ uri: form.video.uri }}
                  player={player}
                  style={{
                    width: 200,
                    height: 300,
                    borderRadius: 35,
                    marginTop: 12,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  contentFit="contain"
                  allowsFullscreen
                  allowsPictureInPicture
                />
              ) : (
                <Image
                  source={icons.upload}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              Adicionar thumbnail
            </Text>
            <TouchableOpacity
              onPress={() => openPicker("thumbnail")}
              style={{
                width: "100%",
                height: 200,
                backgroundColor: "#232329",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {form.thumbnail ? (
                <Image
                  source={{ uri: form.thumbnail.uri }}
                  style={{
                    width: 200,
                    height: 300,
                    borderRadius: 35,
                    marginTop: 12,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={icons.upload}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
            <CustomButton
              title="Criar"
              handlePress={() => {
                handleCreate();
              }}
              isLoading={uploading}
              textStyles={""}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Create;
