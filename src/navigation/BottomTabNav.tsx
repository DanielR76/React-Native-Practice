import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { FavoriteStackNav, PokedexStackNav, AccountStackNav } from "./stacks";
import { ScreenNames } from "../utilities/consts";

const BottomTab = createBottomTabNavigator();

export function BottomTabNav() {
	return (
		<BottomTab.Navigator
			initialRouteName={ScreenNames.Favorite}
			screenOptions={{ headerShown: false }}
		>
			<BottomTab.Screen
				name={ScreenNames.Favorite}
				component={FavoriteStackNav}
				options={{
					tabBarLabel: "Favoritos",
					tabBarIcon: ({ color, size }) => (
						<Icon name="heart" color={color} size={size} />
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
					tabBarLabel: "Cuenta",
					tabBarIcon: ({ color, size }) => (
						<Icon name="user" color={color} size={size} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

export default BottomTabNav;
