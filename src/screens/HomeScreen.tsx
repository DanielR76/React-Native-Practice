import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { screenNames } from "../utilities/consts";

export default function HomeScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToSettingScreen = (): void =>
		navigation.navigate(screenNames.setting);

	return (
		<View>
			<Text>Home</Text>
			<Button onPress={goToSettingScreen} title="Go to settings" />
		</View>
	);
}
