import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Detail({ route }) {
    
    const { name } = route.params;
    const image = 'https://www.emporiotambo.com.br/pub/media/wysiwyg/blog/sabores-de-pizza/xPizza_de_calabresa.jpeg.pagespeed.ic.cZQ6UmJBXO.webp';

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: image}} />
            </View>
            <View style={styles.descriptionView}>
                <Text style={styles.description}>O recheio é preparado com queijo, molho de tomate, calabresa em rodelas, 
                        cebola, tomate picado, azeite e orégano. A azeitona também pode ser acrescentada!'</Text>
            </View>
            <View style={styles.cartVIew}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
    header: {
        borderWidth: 1,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 40
    },
    imageView: {
        padding: 10,
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 150,
    },
    descriptionView: {
        padding: 20
    },
    description: {
        fontSize: 18
    }
})

export default Detail;