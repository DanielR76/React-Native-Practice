import { createStackNavigator } from "@react-navigation/stack";

import { FavoriteScreen } from "../../screens";
import { ScreenNames } from "@utilities";

const Stack = createStackNavigator();

export function FavoriteStackNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={ScreenNames.FavoriteList}
				component={FavoriteScreen}
				options={{ title: "Favoritos" }}
			/>
		</Stack.Navigator>
	);
}

export default FavoriteStackNav;
