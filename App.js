import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "./src/components/Header";
import CategoriesBar from "./src/components/CategoriesBar";
import VideoItem from "./src/components/VideoItem";
import ShortsSection from "./src/components/ShortsSection";

export default function App() {
  const videos = [
    {
      thumbnail: require("./assets/video3.jpg"),
      duration: "1:31",
      title: "Demon Slayer: Kimetsu no Yaiba Castelo Infinito | TRAILER OFICIAL",
      channelImage: require("./assets/channel2.jpg"),
      channelName: "Cruchyroll Brasil",
      views: "809 mil visualizações",
      time: "há 1 mês",
    },
  ];

  const shorts = [
    { thumbnail: require("./assets/frameshort1.jpg"), title: "Allison Janney devours every single role!" },
    { thumbnail: require("./assets/frameshort1.jpg"), title: "Allison Janney devours every single role!" },
    { thumbnail: require("./assets/frameshort1.jpg"), title: "Allison Janney devours every single role!" },
    { thumbnail: require("./assets/frameshort1.jpg"), title: "Allison Janney devours every single role!" },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <CategoriesBar />
      <ScrollView>
        {videos.map((v, i) => (
          <VideoItem key={i} {...v} />
        ))}
        <ShortsSection shorts={shorts} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
