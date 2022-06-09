import { ImageBackground, Text, View, Image, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput, Title, Headline } from 'react-native-paper';
import { useState } from 'react';
import { styles_base, colores } from '../../styles/estilosGeneral';
import * as React from 'react';
import { Appbar } from 'react-native-paper';




export default function getstarted ({ navigation }) {
  
    
    return (
        <View style={styles_base.container}>
            <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               

            </Appbar.Header>

            <View style={{ flex: 2, height: "100%", justifyContent: "flex-center", padding: "5%"}}>

                <Text
                    style={{ color: '#000', marginBottom: 10, 
                             textAlign: "left", width: "100%", 
                             fontWeight:650, fontSize: 30, alignItems: "left"
                              }}>

                   Cuentanos mas de tu negocio

                </Text>
                <Text
                    style={{ color: '#000', 
                             marginBottom:100 , 
                             textAlign: "left", width: "100%", 
                             fontWeight:400, fontSize: 13, 
                             alignItems: "center" 

                             }}>

                    No compartiremos esta información con nadie. La información que solicitamos es para generar tus estimados personalizados y brindarte una mejor experiencia.

                </Text>

            
                    <View style={{ flex: 2, height: "100%", justifyContent: "center", alignItems: "center", width: "100%"}}> 
                        <Image
                            style={{ width: 250, height: 250, padding: 10, resizeMode: 'strech'}}
                            source={require("./../../assets/getstarted.png")}

                        />
                    </View>
               <View style={{ flex: 2, height: "100%", justifyContent: "flex-end" }}>
                <Button 
                    touchableOpacity
                    alignItems= 'Flex-end'
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_base.boton_primario2}
                    
                    
                >

                    <Text
                        style={styles_base.btn_txt_negro2}>
                        Comenzar 
                    </Text>

                </Button>
               
                </View>
            </View>  

        </View>

    );



}
