import { createStackNavigator } from "@react-navigation/stack";

import { PokedexScreen, PokemonScreen } from "../../screens";
import { ScreenNames } from "../../utilities/consts";

const Stack = createStackNavigator();

export function PokedexStackNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen name={ScreenNames.PokemonList} component={PokedexScreen} />
			<Stack.Screen
				name={ScreenNames.Pokemon}
				component={PokemonScreen}
				options={{ headerTransparent: true }}
			/>
		</Stack.Navigator>
	);
}

export default PokedexStackNav;
