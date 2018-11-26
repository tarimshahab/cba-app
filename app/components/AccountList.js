import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList
} from "react-native";

export default class AccountList extends React.Component {
  renderSectionHeader = ({ section: { title } }) => {
    return <Text style={styles.sectionHeader} key={title}>{title}</Text>;
  };

  renderItem = ({ item }) => {
    let balance = '$' + (item.balance/100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let accountNumber = `**** **** **** ${item.accountNumber.substr(-4)}`;
    return (
      <TouchableOpacity style={styles.listItem}>
        <Text style={[styles.listItemText, {flex: 6}]}>{accountNumber}</Text>
        <Text style={[styles.listItemText, {flex: 3}]}>{balance}</Text>
        <Text style={[styles.listItemText, {flex: 0.2, color: '#bebebe'}]}>{"⟩"}</Text>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View style={{
        height: 1,
        backgroundColor: "#CED0CE",
      }}/>
    )
  };

  render() {
    return (
      <SectionList
        contentContainerStyle={styles.container}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        ItemSeparatorComponent={this.renderSeparator}
        sections={[
          { title: "Debit Accounts", data: debitAccounts },
          { title: "Credit Accounts", data: creditAccounts }
        ]}
        keyExtractor={item => item.accountNumber}
      />
    );
  }
}

const debitAccounts = [
  {
    accountNumber: "1111 1111 1111 1111",
    balance: 1585000 //in cents
  },
  {
    accountNumber: "1111 2222 2222 2222",
    balance: 256125855 //in cents
  },
];

const creditAccounts = [
  {
    accountNumber: "9999 9999 9999 9999",
    balance: 38615 //in cents
  },
  {
    accountNumber: "9999 9999 9999 8888",
    balance: 98536 //in cents
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  sectionHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#DDD',
    padding: 10
  },
  listItem: {
    display: 'flex',
    padding: 20,
    flex: 1,
    backgroundColor: "#f9f9f9",
    flexDirection: 'row',
  },
  listItemText: {
    fontSize: 15,
  }
});
