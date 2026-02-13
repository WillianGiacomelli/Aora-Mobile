import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { icons } from "../../constants";

const zoomIn = {
  0: { scale: 0 },
  1: { scale: 1 },
};

const zoomOut = {
  0: { scale: 1 },
  1: { scale: 0.9 },
};

const TrendingItem = ({
  item,
  activeItem,
  setActiveItem,
}: {
  item: any;
  activeItem: any;
  setActiveItem: any;
}) => {
  const [play, setPlay] = useState(false);

  const handlePress = () => {
    setActiveItem(item.$id);
    setPlay(true);
  };

  console.log(item);
  console.log(activeItem);
  return (
    <Animatable.View
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Text style={{ color: "white" }}>Reproduzindo...</Text>
      ) : (
        <TouchableOpacity
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            position: "relative",
          }}
          activeOpacity={0.7}
          onPress={handlePress}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              position: "relative",
            }}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={{
              width: 50,
              height: 50,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: [{ translateX: -25 }, { translateY: -25 }],
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }: { posts: any[] }) => {
  const [activeItem, setActiveItem] = useState(posts[1].$id);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem
          item={item}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      )}
      horizontal
    />
  );
};

export default Trending;
