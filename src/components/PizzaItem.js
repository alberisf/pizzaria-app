import React from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function PizzaItem({navigation, name, image, description, value}) {

	return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate('Detail', {
        name: name
      })}
    >

      <View style={styles.infos}>
        <Text style={styles.title}>{name}</Text>
        
        <Text numberOfLines={5} style={styles.description}>
          {description}
        </Text>

        <Text style={styles.subtitle}>R$ {value}</Text>
      </View>

      <View style={styles.imgBox}>
        <Image style={{ width: 120, height: 100 }} source={{
          uri: image
        }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },

  infos: {
    flex: 1,
    borderWidth: 1
  },
  imgBox: {
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  subtitle: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold'
  },  
  description: {
    fontSize: 16,
    color: "#000",
  },
});

export default PizzaItem;