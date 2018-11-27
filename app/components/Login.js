import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Login extends React.Component {
  state = {
    user: "",
    password: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>CBA Mobile App</Text>
        <TextInput
          style={styles.input}
          placeholder={"Card Number"}
          placeholderTextColor={"#999"}
          value={this.state.user}
          onTextChange={user => this.setState({ user })}
        />
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          placeholderTextColor={"#999"}
          value={this.state.password}
          onTextChange={password => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate("Account List")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
    width: "100%"
  },
  headerText: {
    fontSize: 50,
    marginBottom: 20
  },
  loginButton: {
    marginTop: 15,
    marginBottom: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#4f65cb",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  loginText: {
    color: "white",
    fontSize: 20
  }
});
