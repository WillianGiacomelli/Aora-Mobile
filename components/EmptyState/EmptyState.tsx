import { images } from "@/constants";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";

const EmptyState = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        padding: 20,
      }}
    >
      <Image
        source={images.empty}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {title}
      </Text>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        {subtitle}
      </Text>
      <CustomButton
        title="Criar vídeo"
        handlePress={() => router.push("/create")}
        textStyles=""
        isLoading={false}
      />
    </View>
  );
};

export default EmptyState;
