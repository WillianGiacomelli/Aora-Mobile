import React from "react";
import { FlatList, Text } from "react-native";

const Trending = ({ posts }: { posts: any[] }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text style={{ color: "white" }}>{item.title}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
