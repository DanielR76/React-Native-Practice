import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import { screenNames } from "../utilities/consts";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNav() {
	return (
		<BottomTab.Navigator initialRouteName={screenNames.home}>
			<BottomTab.Screen name={screenNames.home} component={HomeScreen} />
			<BottomTab.Screen name={screenNames.setting} component={SettingScreen} />
		</BottomTab.Navigator>
	);
}
