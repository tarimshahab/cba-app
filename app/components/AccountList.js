import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList
} from "react-native";
import data from "../mockData";

export default class AccountList extends React.Component {
  renderSectionHeader = ({ section: { title } }) => {
    return (
      <Text style={styles.sectionHeader} key={title}>
        {title}
      </Text>
    );
  };

  renderItem = ({ item: account }) => {
    let balance =
      "$" +
      (account.balance / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    let accountNumber = `**** **** **** ${account.number.substr(-4)}`;
    return (
      <TouchableOpacity>
        <View style={styles.listItem}>
          <Text style={[styles.listItemText, { flex: 6 }]}>
            {accountNumber}
          </Text>
          <Text style={[styles.listItemText, { flex: 3 }]}>{balance}</Text>
          <Text style={[styles.listItemText, { flex: 0.2, color: "#bebebe" }]}>
            {"⟩"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  render() {
    return (
      <SectionList
        style={{marginTop: 24}}
        contentContainerStyle={styles.container}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        ItemSeparatorComponent={this.renderSeparator}
        sections={[
          { title: "Debit Accounts", data: data.debitAccounts },
          { title: "Credit Accounts", data: data.creditAccounts }
        ]}
        keyExtractor={account => account.number}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  sectionHeader: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "#DDD",
    padding: 10
  },
  listItem: {
    display: "flex",
    padding: 20,
    flex: 1,
    backgroundColor: "#f9f9f9",
    flexDirection: "row"
  },
  listItemText: {
    fontSize: 15
  }
});
