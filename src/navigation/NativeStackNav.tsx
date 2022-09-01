import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen, FavoriteScreen, PokedexScreen } from "../screens";
import { ScreenNames } from "@utilities";

const Stack = createNativeStackNavigator();

export function NativeStackNav() {
	return (
		<Stack.Navigator initialRouteName={ScreenNames.Pokedex}>
			<Stack.Screen name={ScreenNames.Account} component={AccountScreen} />
			<Stack.Screen name={ScreenNames.Favorite} component={FavoriteScreen} />
			<Stack.Screen name={ScreenNames.Pokedex} component={PokedexScreen} />
		</Stack.Navigator>
	);
}

export default NativeStackNav;
