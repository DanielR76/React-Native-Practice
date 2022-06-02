import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../../screens/AccountScreen";
import { ScreenNames } from "../../utilities/consts";

const Stack = createStackNavigator();

export default function AccountStackNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={ScreenNames.Account}
				component={AccountScreen}
				options={{ title: "Cuenta" }}
			/>
		</Stack.Navigator>
	);
}
