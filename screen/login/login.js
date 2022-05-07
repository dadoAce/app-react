
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';


export default function Login({navigation}) {
    const [text, setText] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                label="Usuario"
                value={text}
                onChangeText={text => setText(text)}
                style={{marginTop:5}}
            />
            <TextInput
                label="Contraseña"
                value={text}
                onChangeText={text => setText(text)}
                style={{marginTop:5}}
            />
            <Button  mode="contained" onPress={() => navigation.navigate("Dashboard")}>
                Iniciar
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }    
});