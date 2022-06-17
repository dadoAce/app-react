import { ImageBackground, Text, View, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';



const Dismisskeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

export default function signup_complet ({ navigation }) {
    
    
    
    return (

<View style={styles_basepantallas.container}>
    <ScrollView>
        <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               

        </Appbar.Header>
        
        <View style={{ flex:5, height: "100%", justifyContent: "100%", 
                           padding: "5%",display: "100%"}}>

            <Text
                   style={{ color: '#000', marginBottom:10 , width: "100%", 
                   fontWeight:700, fontSize: 28, fontStyle: 'normal',fontWeight: 'bold'}}>

                   Verifica tu cuenta 

            </Text>

         </View>
         <View style={{ height: "100%", justifyContent: "center", 
                          alignItems: "center", width: "100%"}}> 
                       <ImageBackground>
                        <Image
                            style={{ width: 250, height: 203, textAlign:"center"}}
                            source={require("./../../assets/signupcomplet.png")}

                        />
                        </ImageBackground>
                    </View>

            <Dismisskeyboard>
             <View style= {[styles_basepantallas.margenLateral, { flex: 6 , justifyContent: "flex-end"}]}>

                 <TextInput label="Numero Telefonico"
                            placeholder='numbers'
                            keyboardType='numeric'
                            underlineColor='transparent'
                            style={{ marginTop: 5, height: 55, marginBottom: 15,backgroundColor: "E5E5E5", margin: 5,
                            borderWidth: 3, borderColor: "#ECECEC",borderRadius: 8, 
                            shadowColor: "black" , textShadowRadius: 1, boton_continuar1: 'flex'  }}
                            
                            />

                    <Button
                    touchableOpacity
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_basepantallas.boton_continuar1}>
                    
                    <Text style={{ fontStyle: 'normal', borderRadius: 10, justifyContent: '' }}>  
                    <Text
                        style={styles_basepantallas.btn_texnegro}>
                        Continuar
                    </Text>
                    </Text>
                </Button>
         
             </View>        
            </Dismisskeyboard>

    </ScrollView>
</View>

    );
}