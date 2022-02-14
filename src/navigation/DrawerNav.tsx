import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "../screens/AccountScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import { ScreenNames } from "../utilities/consts";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name={ScreenNames.Account} component={AccountScreen} />
			<Drawer.Screen name={ScreenNames.Favorite} component={FavoriteScreen} />
			<Drawer.Screen name={ScreenNames.Pokedex} component={PokedexScreen} />
		</Drawer.Navigator>
	);
}
