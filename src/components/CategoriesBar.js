import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

export default function CategoriesBar() {
  const [selected, setSelected] = useState("Tudo");

  const categories = [
    { key: "compass", label: "", icon: require("../../assets/bussola.png") }, // seu ícone de bússola
    { key: "tudo", label: "Tudo" },
    { key: "musica", label: "Música" },
    { key: "jogos", label: "Jogos" },
    { key: "sm", label: "Kimetsu No Yaiba" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      >
        {categories.map((cat, index) => {
          const isSelected = selected === cat.label;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                isSelected && styles.buttonSelected,
                cat.icon && styles.iconButton,
              ]}
              onPress={() => cat.label && setSelected(cat.label)}
              activeOpacity={0.7}
            >
              {cat.icon ? (
                <Image source={cat.icon} style={styles.icon} />
              ) : (
                <Text
                  style={[
                    styles.text,
                    isSelected ? styles.textSelected : styles.textUnselected,
                  ]}
                >
                  {cat.label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingVertical: 8,
  },
  button: {
    backgroundColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSelected: {
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 14,
  },
  textUnselected: {
    color: "#fff",
  },
  textSelected: {
    color: "#000",
    fontWeight: "bold",
  },
  iconButton: {
    width: 36,
    height: 36,
    paddingHorizontal: 0,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
});