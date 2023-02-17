import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Login from "./components/login";

export default function App() {
	return (
		<View style={styles.container}>
			<Login />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		backgroundColor: "#f1f1f1",
		alignItems: "center",
		justifyContent: "center",
	},
});
