import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../screens";
import { ScreenNames } from "@utilities";

const Stack = createStackNavigator();

export function AccountStackNav() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={ScreenNames.Profile}
				component={AccountScreen}
				options={{ title: "Perfil" }}
			/>
		</Stack.Navigator>
	);
}

export default AccountStackNav;
