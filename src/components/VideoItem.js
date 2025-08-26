import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function VideoItem({ thumbnail, duration, title, channelImage, channelName, views, time }) {
  return (
    <TouchableOpacity style={styles.container}>
      {/* Thumbnail */}
      <View>
        <Image source={thumbnail} style={styles.thumbnail} />
        <View style={styles.duration}>
          <Text style={styles.durationText}>{duration}</Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.infoRow}>
        <Image source={channelImage} style={styles.channelImage} />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {channelName} · {views} · {time}
          </Text>
        </View>
        <Text style={styles.menu}>⋮</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  duration: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
  },
  durationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 8,
  },
  channelImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 12,
  },
  menu: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 5,
  },
});