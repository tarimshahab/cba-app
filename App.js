import React from "react";
import { StyleSheet } from "react-native";
import DrawerNav from "./app/config/routes";

export default class App extends React.Component {
  render() {
    return <DrawerNav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
