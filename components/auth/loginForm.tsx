import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Logo from "../global/Logo";
import { useRouter } from "expo-router";

const Formulaire = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    Alert.alert("Form Submitted", `Nom: ${login}\nEmail: ${password}\n`);
  };

  const redirect = () => {
    router.push("register");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <TextInput
        style={styles.input}
        value={login}
        onChangeText={setLogin}
        placeholder="Login"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={redirect}>
        <Text style={styles.buttonlink}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    gap: 15,
    width: "100%",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    backgroundColor: "#9ca3af",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonlink: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Formulaire;
