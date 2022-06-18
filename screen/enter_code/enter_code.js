import { ImageBackground, Text, View, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';





export default function signup_complet ({ navigation }) {
    
    
    
    return (

<View style={styles_basepantallas.container}>
    <ScrollView>
        <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               

        </Appbar.Header>
        
        <View style={{ flex:1, height: "100%", justifyContent: "100%", 
                           padding: "5%",display: "100%"}}>
               <View style={{ flex:4, height: "100%", justifyContent: "100%", 
                           padding: "5%",display: "100%"}}>           

            <Text
                   style={{ color: '#000', marginBottom:10 , width: "100%", 
                   fontWeight:700, fontSize: 28, fontStyle: 'normal',fontWeight: 'bold'}}>

                   Verifica tu cuenta 

            </Text>

            
         </View>   

           <View style={{flexDirection: 'row', flex: 5, justifyContent: 'center', margin:'5%'}}>
              <TextInput style={{backgroundColor:'#ECECEC', width:69, height:75, 
                                 borderRadius:8, margin: 5, underlineColor:"transparent"}}/>
            
              <TextInput style={{backgroundColor:'#ECECEC', width:69, height:75, 
                                 borderRadius:8, margin: 5, underlineColor:'transparent'}}/>
        
              <TextInput style={{backgroundColor:'#ECECEC', width:69, height:75, 
                                 borderRadius:8, margin: 5, underlineColor:'transparent'}}/>

              <TextInput style={{backgroundColor:'#ECECEC', width:69, height:75, 
                                 borderRadius:8, margin: 5, underlineColor:'transparent'}}/>
           </View>

           <View>

                <Text style={{flex:'center', color: '#565656', marginBottom: 10, textAlign: "right", width: 336, height: 17,
                textAlign:'center', justifyContent:'center', marginBottom:'20%'}}
                onPress={() => Linking.openURL('http://google.com')}>
                <Text>
                No recibiste tu codigo?
                </Text>
                <Text style= {{fontWeight: 'bold'}}>
                     Solicitar nuevamente 
                </Text>
                </Text>
           </View>

           <Button
                    touchableOpacity
                    mode="contained"
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles_basepantallas.boton_verificarcuenta} >
                    <Text style={{fontFamily: 'Monserrat', fontStyle: 'normal', width:"105", height:"24" }}>  </Text>
                    <Text
                        style={styles_basepantallas.btn_texnegro}>
                        verificar cuenta
                    </Text>

                </Button>

   </View>
    </ScrollView>
</View>

    );
}