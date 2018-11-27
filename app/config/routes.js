import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import AccountList from "../components/AccountList";
import Login from "../components/Login";
import Bill from "../components/Bill";

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
    }
  },
  {
    initialRouteName: "Bills"
  }
);

export default DrawerNav;
