import { useVideoPlayer, VideoView } from "expo-video";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { icons } from "../../constants";

const zoomIn = {
  0: { transform: [{ scale: 0 }] },
  1: { transform: [{ scale: 1 }] },
};

const zoomOut = {
  0: { transform: [{ scale: 1 }] },
  1: { transform: [{ scale: 0.9 }] },
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

  const player = useVideoPlayer(item.video, (player) => {
    player.loop = false;
  });

  React.useEffect(() => {
    if (play) {
      player.play();
    } else {
      player.pause();
    }
  }, [play]);
  React.useEffect(() => {
    const subscription = player.addListener("playToEnd", () => {
      setPlay(false);
    });
    return () => {
      subscription.remove();
    };
  }, [player]);

  return (
    <Animatable.View
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <VideoView
          source={{ uri: item.video }}
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
        <TouchableOpacity
          style={{
            width: 200,
            height: 200,
            marginHorizontal: 10,
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
  const [activeItem, setActiveItem] = useState();

  const viewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

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
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{
        x: 170,
      }}
      horizontal
    />
  );
};

export default Trending;
