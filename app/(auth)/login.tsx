import LoginForm from "@/components/auth/loginForm";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Login;
