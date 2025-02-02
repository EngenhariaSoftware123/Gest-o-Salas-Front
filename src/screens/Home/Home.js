import React from "react";
import {
  StatusBar,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const solicitarManutencao = () => {
    navigation.navigate("Maintenance");
    console.log("Solicitando manutenção...");
  };
  return (
    <View style={styles.container}>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.container}>User@Name</Text>
      <TouchableOpacity style={styles.button} onPress={solicitarManutencao}>
        <Text style={styles.buttonText}>Solicitar Manutenção</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
