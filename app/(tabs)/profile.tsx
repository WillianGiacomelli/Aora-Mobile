import EmptyState from "@/components/EmptyState/EmptyState";
import VideoCard from "@/components/VideoCard/VideoCard";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getUserPostst } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(() => getUserPostst(user.$id));

  const logout = async () => {
    await logout();
    setIsLoggedIn(false);
    setUser(null);
    router.replace("/sign-in");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#161622",
        height: "100%",
        padding: 16,
      }}
    >
      <FlatList
        data={posts as any}
        keyExtractor={(item: any) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            userId={item.userId}
            prompt={item.prompt}
          />
        )}
        ListHeaderComponent={() => (
          <View>
            <View
              style={{
                marginBottom: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "medium",
                  }}
                >
                  Meu perfil
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  {user.username}
                </Text>
              </View>
            </View>

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
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Últimos vídeos
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <EmptyState
            title="Nenhum vídeo encontrado"
            subtitle="Seja o primeiro a postar um vídeo"
          />
        }
      />
    </View>
  );
};

export default Profile;
