import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import { ScreenNames } from "../utilities/consts";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNav() {
	return (
		<BottomTab.Navigator initialRouteName={ScreenNames.Account}>
			<BottomTab.Screen name={ScreenNames.Account} component={AccountScreen} />
			<BottomTab.Screen
				name={ScreenNames.Favorite}
				component={FavoriteScreen}
			/>
			<BottomTab.Screen name={ScreenNames.Pokedex} component={PokedexScreen} />
		</BottomTab.Navigator>
	);
}
