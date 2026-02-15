import EmptyState from "@/components/EmptyState/EmptyState";
import SearchInput from "@/components/SearchInput/SearchInput";
import VideoCard from "@/components/VideoCard/VideoCard";
import { searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
const Search = () => {
  const { query } = useLocalSearchParams();
  const searchQuery = Array.isArray(query) ? query[0] : query;
  const { data: posts, refetch } = useAppwrite(() => searchPosts(searchQuery));

  useEffect(() => {
    if (searchQuery) {
      refetch();
    }
  }, [searchQuery]);

  return (
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
                Buscando vídeos
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {searchQuery}
              </Text>
            </View>
          </View>
          <SearchInput
            value={searchQuery}
            placeholder="Pesquisar"
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
  );
};

export default Search;
