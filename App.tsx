import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./src/navigation/BottomTabNav";

export default function App() {
	return (
		<NavigationContainer>
			<BottomTabNav />
		</NavigationContainer>
	);
}
