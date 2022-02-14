import { View, Text, Button } from "react-native";
import { screenNames } from "../utilities/consts";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function SettingScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToHomeScreen = (): void => navigation.navigate(screenNames.home);

	return (
		<View>
			<Text>Setting</Text>
			<Button onPress={() => goToHomeScreen()} title="Go to Home" />
		</View>
	);
}
