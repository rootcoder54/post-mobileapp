import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.image}
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Google_Messages_icon_%282022%29.svg/1200px-Google_Messages_icon_%282022%29.svg.png" }}
      />
      <Text style={styles.texte}>Mon Mur</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  image: {
    width: 30,
    height: 30,
  },
  texte:{
    color:'black',
    fontWeight:'bold',
    fontSize:17
  }
});

export default Logo;
