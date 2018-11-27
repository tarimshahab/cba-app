import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import AccountList from "../components/AccountList";
import Login from "../components/Login";
import Bill from "../components/Bill";
import UserProfile from "../components/UserProfile";

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
    'User Info': {
      screen: UserProfile
    }
  },
  {
    initialRouteName: "User Info"
  }
);

export default DrawerNav;
