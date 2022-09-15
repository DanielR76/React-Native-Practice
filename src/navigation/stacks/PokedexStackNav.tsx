import { createStackNavigator } from "@react-navigation/stack";

import { PokedexScreen, PokemonScreen } from "@screens";
import { ScreenNames } from "@utilities";

const Stack = createStackNavigator();

export function PokedexStackNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={ScreenNames.PokemonList}
				component={PokedexScreen}
				options={{ title: "Pokemon list" }}
			/>
			<Stack.Screen
				name={ScreenNames.Pokemon}
				component={PokemonScreen}
				options={{ headerTransparent: true, headerTitle: "" }}
			/>
		</Stack.Navigator>
	);
}

export default PokedexStackNav;
