import { ImageBackground, Text, View, Image, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';




export default function getstarted ({ navigation }) {
  
    
    return (
        
        <View style={styles_basepantallas.container}>
            <ScrollView>
            <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               

            </Appbar.Header>
        
            <View style={{ flex:8, height: "100%", justifyContent: "100%", 
                           padding: "5%",display: "100%"}}>

                <Text
                   style={{ color: '#000', marginBottom:10 , width: "100%", 
                   fontWeight:700, fontSize: 28, fontStyle: 'normal',fontWeight: 'bold'}}>

                   Cuentanos mas de tu negocio

                </Text>
                <Text
                    style={{ color: '##707070', 
                             marginBottom:20, 
                             textAlign: "left", width: "100%", 
                             fontWeight:400, fontSize: 13, 
                             alignItems: "center" ,
                             width: "100%", height: 51, flex: "center"

                             }}>

                    No compartiremos esta información con nadie. La información que solicitamos es 
                    para generar tus estimados personalizados y brindarte una mejor experiencia.

                </Text>

            
                    <View style={{ height: "100%", justifyContent: "center", 
                          alignItems: "center", width: "100%"}}> 
                       <ImageBackground>
                        <Image
                            style={{ width: 319, height: 285, textAlign:"center"}}
                            source={require("./../../assets/getstarted.png")}

                        />
                        </ImageBackground>
                    </View>
               <View style={{flex:2, height: "100%", justifyContent: "center", paddingTop:"5%", paddingBottom:"5%"}}>
                <Button 
                    touchableOpacity
                    marginBottom="5"
                    alignItems= 'center'
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_basepantallas.boton_comenzar}>
                    <Text style={{ fontStyle: 'normal', width:"105", height:"24" }}> 
                     </Text>
                    <Text
                        style={styles_basepantallas.btn_texnegro}>
                        Comenzar
                    </Text>

                </Button>
               
                </View>
            </View>  
           
            </ScrollView>
        </View>
        
       
    );



}
