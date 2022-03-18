import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import AccountScreen from "../screens/AccountScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";

import Icon from "react-native-vector-icons/FontAwesome5";
import { ScreenNames } from "../utilities/consts";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNav() {
	return (
		<BottomTab.Navigator initialRouteName={ScreenNames.Account}>
			<BottomTab.Screen
				name={ScreenNames.Favorite}
				component={FavoriteScreen}
				options={{
					tabBarLabel: "Favoritos",
					headerTitle: "Favoritos",
					tabBarIcon: ({ color, size }) => (
						<Icon name="heart" color={color} size={size} />
					),
				}}
			/>
			<BottomTab.Screen
				name={ScreenNames.Pokedex}
				component={PokedexScreen}
				options={{
					tabBarLabel: "",
					headerTitle: "PokeBolas",
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
				component={AccountScreen}
				options={{
					tabBarLabel: "Mi cuenta",
					headerTitle: "Mi cuenta",
					tabBarIcon: ({ color, size }) => (
						<Icon name="user" color={color} size={size} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}
