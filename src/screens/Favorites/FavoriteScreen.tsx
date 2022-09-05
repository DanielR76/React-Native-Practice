import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { getPokemonStorage, ScreenNames } from "@utilities";

export function FavoriteScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToHomeScreen = (): void => navigation.navigate(ScreenNames.Account);

	const getPokemos = async () => {
		const temp = await getPokemonStorage();
		console.log(temp);
	};

	return (
		<View>
			<Text>Setting</Text>
			<Button onPress={() => getPokemos()} title="Get pokemos" />
		</View>
	);
}

export default FavoriteScreen;
