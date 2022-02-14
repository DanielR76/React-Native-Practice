import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import { screenNames } from "../utilities/consts";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name={screenNames.home} component={HomeScreen} />
			<Drawer.Screen name={screenNames.setting} component={SettingScreen} />
		</Drawer.Navigator>
	);
}
