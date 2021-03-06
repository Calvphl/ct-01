import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CoinItem from "./src/components/CoinItem";
import cryptocurrencies from "./assets/data/cryptocurrencies.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#121212",
  },
});
