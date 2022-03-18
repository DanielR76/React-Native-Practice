import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNames } from "../utilities/consts";

import { PokemonsRequest } from "../apis/getPokemons";
import { useEffect } from "react";

export default function AccountScreen() {
	const { getPokemons, listOfPokemons } = PokemonsRequest();
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToSettingScreen = (): void =>
		navigation.navigate(ScreenNames.Favorite);

	useEffect(() => {
		getPokemons();
	}, []);
	console.log(listOfPokemons.data);

	return (
		<View>
			<Text>Home</Text>
			<Button onPress={goToSettingScreen} title="Go to Favorites" />
		</View>
	);
}
