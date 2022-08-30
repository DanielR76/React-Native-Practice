import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNav from "./src/navigation/BottomTabNav";
import { ContextProvider } from "./src/context";

export default function App() {
	return (
		<NavigationContainer>
			<ContextProvider>
				<BottomTabNav />
			</ContextProvider>
		</NavigationContainer>
	);
}
