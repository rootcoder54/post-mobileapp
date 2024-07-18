import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Page Home.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 9,
    color: "white",
    fontWeight: "bold",
  },
  titre: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
