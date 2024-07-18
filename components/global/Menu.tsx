import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Menu = () => {
  const router = useRouter();
  const redirect = () => {
    router.push("/login");
  };
  return (
    <TouchableOpacity style={styles.button} onPress={redirect}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 9,
    paddingHorizontal: 25,
    borderRadius: 9,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "#e7e5e4",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default Menu;
