import { createStackNavigator } from "@react-navigation/stack";

import PokedexScreen from "../../screens/PokedexScreen";
import PokemonScreen from "../../screens/PokemonScreen";
import { ScreenNames } from "../../utilities/consts";

const Stack = createStackNavigator();

export default function PokedexStackNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen name={ScreenNames.PokemonList} component={PokedexScreen} />
			<Stack.Screen name={ScreenNames.Pokemon} component={PokemonScreen} />
		</Stack.Navigator>
	);
}
