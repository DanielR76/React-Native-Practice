import { View, Text, Button } from "react-native";
import { screenNames } from "../utilities/consts";
import { navigationInterface } from "../interfaces/SettingInterface";

export default function SettingScreen({ navigation }: navigationInterface) {
	const goToHomeScreen = (): void => navigation.navigate(screenNames.home);

	return (
		<View>
			<Text>Setting</Text>
			<Button onPress={() => goToHomeScreen()} title="Go to Home" />
		</View>
	);
}
