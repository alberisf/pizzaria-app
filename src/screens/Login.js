import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, tut } from "react-native";

function Login({ navigation }) {

    const [login, onChangeLogin] = useState('')
    const [password, onChangePassword] = useState('')

    function doLogin() {
        if (login != 'admin' || password != '123') {
            console.warn('Senha incorreta!');
            return;
        }

        navigation.navigate('List');
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.header}>Tela de Login</Text>

                <View style={styles.item}>
                    <Text style={styles.txt}>Login</Text>
                    <TextInput style={styles.input} onChangeText={onChangeLogin} value={login} />
                </View>

                <View style={styles.item}>
                    <Text style={styles.txt}>Senha</Text>
                    <TextInput style={styles.input} onChangeText={onChangePassword} value={password} />
                </View>

                <Button
                    title="Fazer Login"
                    onPress={doLogin}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        flex: 1,
        padding: 20,
        borderWidth: 1,
        justifyContent: 'center'
    },
    header: {
        alignSelf: 'center',
        fontSize: 28
    },
    item: {
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10
    },
    txt: {
        fontSize: 20
    }
})

export default Login;