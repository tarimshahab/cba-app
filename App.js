import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountList from "./app/components/AccountList";

export default class App extends React.Component {
  render() {
    return (
      <AccountList/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
