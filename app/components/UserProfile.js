import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SectionList,
  TextInput,
  Picker
} from "react-native";
import data from "../mockData";

export default class UserProfile extends React.Component {
  state = {
    homeBranch: {
      address: "111 Bank Street",
      phone: "(613)-111-1111",
      manager: "Bill Blington"
    }
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Name</Text>
          <Text style={styles.fieldValue}>John Smith</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>DOB</Text>
          <Text style={styles.fieldValue}>18/05/1985</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Sex</Text>
          <Text style={styles.fieldValue}>Male</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Home Branch</Text>
          <Text style={styles.fieldValue}>{this.state.homeBranch.address}</Text>
          <Text style={styles.fieldValue}>{this.state.homeBranch.phone}</Text>
          <Text style={styles.fieldValue}>
            Manager: {this.state.homeBranch.manager}
          </Text>
          <Picker
            selectedValue={"Change Branch"}
            onValueChange={homeBranch => this.setState({ homeBranch })}
            style={{ color: "#66bfff", backgroundColor: "white" }}
          >
            {[
              <Picker.Item
                label={"Change Branch"}
                value={"Change Branch"}
                key={"Change Branch"}
              />,
              ...data.bankBranches.map(branch => {
                return (
                  <Picker.Item
                    label={branch.address}
                    value={branch}
                    key={branch.address}
                  />
                );
              })
            ]}
          </Picker>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20
  },
  fieldContainer: {
    marginBottom: 10
  },
  fieldLabel: {
    marginTop: 10,
    color: "grey"
  },
  fieldValue: {
    fontSize: 20,
    padding: 5
  },
  button: {
    marginTop: 15,
    marginBottom: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#8288cb",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },

  hyperlinkButton: {
    color: "#66bfff",
    textAlign: "right",
    fontSize: 15,
    top: -5
  }
});
