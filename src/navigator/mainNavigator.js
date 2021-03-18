import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import SplashScreen1215646Navigator from '../features/SplashScreen1215646/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion

  /** new navigators can be added here */
  SplashScreen1215646: {
    screen: SplashScreen1215646Navigator
  }
}


const Drawer = createDrawerNavigator(
    {
        ...AppNavigator,
    },
    {
        contentComponent: SideMenu,
        initialRouteName: "SplashScreen1215646", // Splash Screen
    },
);

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
