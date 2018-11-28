import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Switch,
  Modal
} from "react-native";
import data from "../mockData";

export default class Transfer extends React.Component {
  static navigationOptions = {
    style: { marginTop: 24 }
  };

  state = {
    fromAccount: null,
    toAccount: null,
    amount: 0,
    amountText: "",
    reOccurring: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.fieldLabel}>From Account</Text>
          <Picker
            selectedValue={this.state.fromAccount}
            onValueChange={itemValue =>
              this.setState({ fromAccount: itemValue })
            }
          >
            {[...data.debitAccounts, ...data.creditAccounts].map(account => (
              <Picker.Item
                label={account.name}
                value={account.number}
                key={account.number}
              />
            ))}
          </Picker>
        </View>
        <View>
          <Text style={styles.fieldLabel}>To Account</Text>
          <Picker
            selectedValue={this.state.toAccount}
            onValueChange={itemValue =>
              this.setState({ toAccount: itemValue })
            }
          >
            {[...data.debitAccounts, ...data.creditAccounts].map(account => (
              <Picker.Item
                label={account.name}
                value={account.number}
                key={account.number}
              />
            ))}
          </Picker>
        </View>
        <View>
          <Text style={styles.fieldLabel}>Amount</Text>
          <TextInput
            value={this.state.amountText}
            keyboardType={"decimal-pad"}
            style={styles.fieldValue}
            onChangeText={amountText => {
              let amount = +Number(
                amountText.replace(/[^0-9.-]+/g, "")
              ).toFixed(2);
              this.setState({ amount, amountText });
            }}
            onEndEditing={() => {
              let amountText =
                "$" +
                this.state.amount
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,");
              this.setState({
                amountText
              });
            }}
          />
        </View>
        <View>
          <Text style={styles.fieldLabel}>Re-occurring?</Text>
          <Switch
            value={this.state.reOccurring}
            onValueChange={reOccurring => this.setState({ reOccurring })}
          />
        </View>
        {this.state.reOccurring && (
          <View>
            <View>
              <Text>Frequency</Text>
              <Picker
                selectedValue={this.state.frequency}
                onValueChange={itemValue =>
                  this.setState({ frequency: itemValue })
                }
              >
                {data.frequencies.map(frequency => (
                  <Picker.Item
                    label={frequency.name}
                    value={frequency.value}
                    key={frequency.value}
                  />
                ))}
              </Picker>
            </View>
            <View>
              <Text style={styles.fieldLabel}>Start Date</Text>
              <TextInput
                value={this.state.startDate}
                style={styles.fieldValue}
                onChangeText={startDate => this.setState({ startDate })}
              />
            </View>
          </View>
        )}
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Make Transfer</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20
  },
  fieldValue: {
    backgroundColor: "#f1f1f1",
    fontSize: 18,
    padding: 5,
    borderRadius: 8
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
  fieldLabel: {
    marginTop: 10,
    color: "grey"
  },
  hyperlinkButton: {
    color: "#66bfff",
    textAlign: "right",
    fontSize: 15,
    top: -5
  }
});
