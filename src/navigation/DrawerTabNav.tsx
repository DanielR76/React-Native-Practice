import { createDrawerNavigator } from "@react-navigation/drawer";

import { AccountScreen, FavoriteScreen, PokedexScreen } from "../screens";
import { ScreenNames } from "../utilities/consts";

const Drawer = createDrawerNavigator();

export function DrawerNav() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name={ScreenNames.Account} component={AccountScreen} />
			<Drawer.Screen name={ScreenNames.Favorite} component={FavoriteScreen} />
			<Drawer.Screen name={ScreenNames.Pokedex} component={PokedexScreen} />
		</Drawer.Navigator>
	);
}

export default DrawerNav;
