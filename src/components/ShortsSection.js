import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

export default function ShortsSection({ shorts }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.shortsCard}>
      <Image source={item.thumbnail} style={styles.shortsThumbnail} />
      <Text style={styles.shortsText} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header da seção Shorts */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../../assets/shorts.png")}
            style={styles.shortsIcon}
          />
          <Text style={styles.title}>Shorts</Text>
        </View>
        <Text style={styles.menu}>⋮</Text>
      </View>

      {/* Lista em grade 2x */}
      <FlatList
        data={shorts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  shortsIcon: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  menu: {
    color: "#fff",
    fontSize: 20,
    paddingRight: 4,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  shortsCard: {
    flex: 1,
    margin: 6,
  },
  shortsThumbnail: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginBottom: 5,
  },
  shortsText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
});
