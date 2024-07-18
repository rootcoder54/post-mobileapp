import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Menu = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding:9,
    paddingHorizontal:25,
    borderRadius:9,
    borderStyle:"solid",
    borderColor:"black",
    backgroundColor:'#e7e5e4'
  },
  buttonText: {
    fontWeight:"bold"
  },
});

export default Menu;
