import { ImageBackground, Text, View, Image, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';
import {keyboardAccessotyView} from 'react-native-keyboard-accessory'



export default function signup_complet ({ navigation }) {
    
    
    
    return (

<View style={styles_basepantallas.container}>
    <ScrollView>
        <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               

        </Appbar.Header>
        
        <View style={{ flex:8, height: "100%", justifyContent: "100%", 
                           padding: "5%",display: "100%"}}>

            <Text
                   style={{ color: '#000', marginBottom:20 , width: "100%", 
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
         <View>
            <keyboardAccessotyView>
    

            </keyboardAccessotyView>
         


            
            </View>        

    </ScrollView>
</View>

    );
}