import React from "react";
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { CommonActions } from '@react-navigation/native';
import PizzaItem from "../components/PizzaItem";

function List({ navigation }) {

    const hasUnsavedChanges = true;

	const itens = getItens();

    // preventBack(navigation, hasUnsavedChanges);

    return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={itens}
				renderItem={({item}) => 
					<PizzaItem 
						navigation={navigation}
						name={item.name} 
						image={item.image}
						description={item.description}
						value={item.value}
					/>}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
    );
}

function getItens() {
	return [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Calabresa',
			description: 'O recheio é preparado com queijo, molho de tomate, calabresa em rodelas, cebola, tomate picado, azeite e orégano. A azeitona também pode ser acrescentada!',
			value: 45,
			image: 'https://www.emporiotambo.com.br/pub/media/wysiwyg/blog/sabores-de-pizza/xPizza_de_calabresa.jpeg.pagespeed.ic.cZQ6UmJBXO.webp'
		  },
		  {
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			name: 'Portuguesa',
			description: 'É feita com queijo, azeitona verde ou preta, ovo cozido, presunto cozido, cebola, ervilha, molho de tomate e azeite. Também há preparações que são acrescentadas milho verde, pimentão e orégano!',
			value: 50,
			image: 'https://www.emporiotambo.com.br/pub/media/wysiwyg/blog/sabores-de-pizza/xPizza_de_calabresa.jpeg.pagespeed.ic.cZQ6UmJBXO.webp'
		  },
		  {
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			name: 'Muçarela',
			description: 'Esse sabor leva nada mais nada menos que o queijo muçarela em abundância, molho de tomate fresco, azeitona, rodelas de tomate e orégano!',
			value: 60,
			image: 'https://www.emporiotambo.com.br/pub/media/wysiwyg/blog/sabores-de-pizza/xPizza_de_calabresa.jpeg.pagespeed.ic.cZQ6UmJBXO.webp'
		  },
	];
}

function preventBack(navigation, hasUnsavedChanges) {
	React.useEffect(
		() =>
		  navigation.addListener('beforeRemove', (e) => {
			if (!hasUnsavedChanges) {
			  // If we don't have unsaved changes, then we don't need to do anything
			  return;
			}
  
			// Prevent default behavior of leaving the screen
			e.preventDefault();
  
			// Prompt the user before leaving the screen
			Alert.alert(
			  'Deseja sair?',
			  'Se você voltar terá que fazer o login novamente. Deseja realmente sair?',
			  [
				{ text: "Continuar", style: 'cancel', onPress: () => {} },
				{
				  text: 'Sair',
				  style: 'destructive',
				  // If the user confirmed, then we dispatch the action we blocked earlier
				  // This will continue the action that had triggered the removal of the screen
				  onPress: () => navigation.dispatch(e.data.action),
				},
			  ]
			);
		  }),
		[navigation, hasUnsavedChanges]
	  );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
}) 

export default List;