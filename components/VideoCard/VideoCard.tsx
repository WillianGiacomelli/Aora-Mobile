import React from "react";
import { Image, Text, View } from "react-native";

const VideoCard = ({
  title,
}: {
  title: string;
  video: string;
  thumbnail: string;
  prompt: string;
  userId: string;
}) => {
  return (
    <View>
      <Image source={{ uri: thumbnail }} style={{ width: 100, height: 100 }} />
      <Text>{title}</Text>
    </View>
  );
};

export default VideoCard;
