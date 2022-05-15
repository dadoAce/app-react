
import { StyleSheet, Text, View , Image,Linking, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import React from "react";



export default function Login({navigation}) {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    return (

        <View style={styles.container}>
         
         <Image
          style={{ width: '100%', height: '60%', marginBottom: 10 }}
          source={require("./../../Inicio.png")}
        />
        
            <TextInput
                label="correo electronico"
                value={text}
                onChangeText={text => setText(text)}
                style={{marginTop:5,width:'90%',height:50}}
            />
            <TextInput
                label="Contraseña"
                value={text2}
                onChangeText={text2 => setText2(text2)}
                style={{marginTop:5,width:'90%',height:50,marginBottom: 10}}
                secureTextEntry
                right={<TextInput.Icon name="eye"/>
            }
            />
             <Text style={{color: 'blue',marginBottom: 40}}
                   onPress={() => Linking.openURL('http://google.com')}>
                   ¿Olvidaste tu contraseña?
             </Text>
            <Button  
            touchableOpacity
            mode="contained" onPress={() => navigation.navigate("Dashboard")} color="gold"
            Text= "black"
            style={{width:'90%'}}>
               Iniciar sesión 
            
            </Button>
            <Text style={{color: 'blue',marginBottom: 10}}
                  onPress={() => Linking.openURL('http://google.com')}>
                  ¿Aun no te has registrado?
             </Text>

            <Button  
            touchableOpacity
            mode="contained" onPress={() => navigation.navigate("Dashboard")} color="yellow"
            style={{width:'90%', marginBottom: 10,  backgroundColor:'white', 
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'yellow',
            color: 'orange'
            
            
            }}
           
        
            >
                Registrarse
            
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
        width: '100%',
        height:'100%',
        

    }
    ,
    boton: {
        margin:10, 
        backgroundColor: "gold"


    },
     scrollView: {
        width: '100%',
        height:'100%',
      },
      innerText: {
        color: 'yellow'
      }
        
    
});