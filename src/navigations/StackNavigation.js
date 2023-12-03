import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Login";
import List from "../screens/List";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

function StackNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="List" component={List} options={{
					title: "Pizzas",
					headerBackVisible: false,
				}} />
				<Stack.Screen name="Detail" component={Detail} options={{
					title: "Pizza"
				}} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default StackNavigation;