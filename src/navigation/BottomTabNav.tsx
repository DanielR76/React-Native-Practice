import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { FavoriteStackNav, PokedexStackNav, AccountStackNav } from "./stacks";
import { ScreenNames } from "@utilities";

const BottomTab = createBottomTabNavigator();

export function BottomTabNav() {
	const setColor = (focused: boolean, color: string) => {
		return focused ? "#f66" : color;
	};

	return (
		<BottomTab.Navigator
			initialRouteName={ScreenNames.Pokedex}
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
			}}
		>
			<BottomTab.Screen
				name={ScreenNames.Favorite}
				component={FavoriteStackNav}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<Icon name="heart" color={setColor(focused, color)} size={size} />
					),
				}}
			/>
			<BottomTab.Screen
				name={ScreenNames.Pokedex}
				component={PokedexStackNav}
				options={{
					tabBarLabel: "Pokedex",
					tabBarIcon: () => (
						<Image
							source={require("../../assets/pokeball.png")}
							style={{ height: 60, width: 60, top: -16 }}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name={ScreenNames.Account}
				component={AccountStackNav}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<Icon name="user" color={setColor(focused, color)} size={size} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

export default BottomTabNav;
