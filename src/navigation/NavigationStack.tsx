import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import { screenNames } from "../utilities/consts";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
	return (
		<Stack.Navigator initialRouteName={screenNames.home}>
			<Stack.Screen name={screenNames.home} component={HomeScreen} />
			<Stack.Screen name={screenNames.setting} component={SettingScreen} />
		</Stack.Navigator>
	);
}
