import EmptyState from "@/components/EmptyState/EmptyState";
import SearchInput from "@/components/SearchInput/SearchInput";
import Trending from "@/components/Trending/Trending";
import { getAllPosts } from "@/lib/appwrite";
import React from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
const Home = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const posts = await getAllPosts();
      setData(posts);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Fetch new data here
    setRefreshing(false);
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
      <SafeAreaView>
        <FlatList
          data={[{ id: "1", title: "Post 1" }]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={{ color: "white" }}>{item.title}</Text>
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
                    Seja bem-vindo novamente
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    Aora
                  </Text>
                </View>

                <Image
                  source={images.logoSmall}
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
              </View>
              <SearchInput
                value=""
                placeholder="Pesquisar"
                handleChangeText={() => {}}
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
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  Últimos vídeos
                </Text>
                <Trending
                  posts={[
                    {
                      $id: "1",
                      title: "Post 1",
                      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    },
                    {
                      $id: "2",
                      title: "Post 2",
                      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    },
                    {
                      $id: "3",
                      title: "Post 3",
                      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    },
                    {
                      $id: "4",
                      title: "Post 4",
                      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    },
                    {
                      $id: "5",
                      title: "Post 5",
                      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    },
                  ]}
                />
              </View>
            </View>
          )}
          ListEmptyComponent={
            <EmptyState
              title="Nenhum vídeo encontrado"
              subtitle="Seja o primeiro a postar um vídeo"
            />
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
