import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VideoCard = ({
  title,
  video,
  thumbnail,
  prompt,
  userId,
}: {
  title: string;
  video: string;
  thumbnail: string;
  prompt: string;
  userId: string;
}) => {
  const [play, setPlay] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.roundedImageContainer}>
          <Image
            source={{ uri: thumbnail }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => setPlay(!play)}>
        {play ? (
          "Reproduzindo"
        ) : (
          <TouchableOpacity>
            <Image source={{ uri: thumbnail }} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  roundedImageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
