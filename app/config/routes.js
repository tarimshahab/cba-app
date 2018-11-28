import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import AccountList from "../components/AccountList";
import Login from "../components/Login";
import Bill from "../components/Bill";
import UserProfile from "../components/UserProfile";
import Transfer from '../components/Transfer';

const DrawerNav = createDrawerNavigator(
  {
    Login: {
      screen: Login
    },
    "Account List": {
      screen: AccountList
    },
    Bills: {
      screen: Bill
    },
    Transfers: {
      screen: Transfer
    },
    'User Info': {
      screen: UserProfile
    }
  },
  {
    initialRouteName: "Account List"
  }
);

export default DrawerNav;
