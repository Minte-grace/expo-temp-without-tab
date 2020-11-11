import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const Home = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home</Text>
      <Button
        title="Detail"
        onPress={() => props.navigation.navigate("Detail")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
