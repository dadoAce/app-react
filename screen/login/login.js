
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { Headline } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';


export default function Login({navigation}) {
    const [text, setText] = useState("");
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
            <Headline>titulo</Headline>
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
            <Button  mode="contained" onPress={() => navigation.navigate("Dashboard")}  style={styles.boton} >
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
    },
     boton:{
         backgroundColor: '#FFBE00',
         color:"#000"
     }
});