import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

const Detail = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Detail</Text>
      <Button
        title="Go Back"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
