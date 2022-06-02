import { createStackNavigator } from "@react-navigation/stack";

import FavoriteScreen from "../../screens/FavoriteScreen";
import { ScreenNames } from "../../utilities/consts";

const Stack = createStackNavigator();

export default function FavoriteStackNav() {
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
