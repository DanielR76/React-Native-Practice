import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import { ScreenNames } from "../utilities/consts";

const Stack = createNativeStackNavigator();

export default function NativeStackNav() {
	return (
		<Stack.Navigator initialRouteName={ScreenNames.Account}>
			<Stack.Screen name={ScreenNames.Account} component={AccountScreen} />
			<Stack.Screen name={ScreenNames.Favorite} component={FavoriteScreen} />
			<Stack.Screen name={ScreenNames.Pokedex} component={PokedexScreen} />
		</Stack.Navigator>
	);
}
