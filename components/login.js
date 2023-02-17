import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Login() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hello</Text>
			<Text style={styles.subTitle}>Sign in to your account</Text>
			<TextInput placeholder="jhon@email.com" style={styles.textInput} />
			<TextInput placeholder="password" style={styles.textInput} />
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
	title: {
		fontSize: 80,
		color: "#34434d",
		fontWeight: "bold",
	},
	subTitle: {
		fontSize: 20,
		color: "gray",
	},
	textInput: {
		padding: 10,
		paddingStart: 30,
		width: "80%",
		height: 50,
		marginTop: 20,
		borderRadius: 30,
		backgroundColor: "white",
	},
});
