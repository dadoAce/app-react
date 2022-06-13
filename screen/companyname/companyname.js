import { ImageBackground, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput, Title, Headline } from 'react-native-paper';
import { useState } from 'react';
import * as React from 'react';
import * as Progress from 'react-native-progress';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';
import { ScrollView } from 'react-native-web';



export default function getstarted ({ navigation }) {

    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");
    const [text6, setText6] = useState("");
  
    
    return (
        <View style={styles_basepantallas.container}>
          <ScrollView>
            <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               
            </Appbar.Header>

            <View style={{  flex: 8, height: "100%", justifyContent: "flex-end"}}>

                  <View style={{flex: 2, height: "100%", justifyContent: "flex-end", paddingTop: "5%", 
                  width:"100%", display:"flex"}}>

                   <Text
                      style={{ color: '#000', marginBottom: 50, textAlign: "left", width: "100%", 
                      width: 353, height:68, fontWeight:700, fontSize: 28, alignItems: "left" , 
                      fontStyle: 'normal',fontWeight: 'bold'
                         }}>

                     Información basica de ti y tu negocio

                    </Text>
                  </View>

                   <View style={[styles_basepantallas.margenLateral, { flex: 2}]}>
            
                     
                    <TextInput
                     label="Nombre"
                     value={text4}
                     onChangeText={text4 => setText4(text4)}
                     style={{ marginTop: 5, height: 50, marginBottom: 15, backgroundColor: '#fff', 
                     borderBottomColor: '#ECECEC', borderRadius: 50,  margin: 5,
                     borderWidth: 3, borderColor: "#ECECEC", borderRadius: 8, elevation: 0,shadowOpacity:0, 
                     shadowRadius:0, shadowOffset:0, shadowColor: "black" , textShadowRadius: 1 
                     }}/>
                    
                    <TextInput
                     label="Apellido"
                     value={text5}
                     onChangeText={text5 => setText5(text5)}
                     style={{ marginTop: 5, height: 50, marginBottom: 15, backgroundColor: '#fff', 
                     borderBottomColor: '#ECECEC', borderRadius: 50,  margin: 5,
                     borderWidth: 3, borderColor: "#ECECEC", borderRadius: 8, elevation: 0,shadowOpacity:0, 
                     shadowRadius:0, shadowOffset:0, shadowColor: "black" , textShadowRadius: 1 }}
                    />
                    <TextInput
                     label="Compañia (Opcional)"
                     value={text6}
                     onChangeText={text6 => setText6(text6)}
                     style={{  marginTop: 5, height: 50, marginBottom: 15, backgroundColor: '#fff', 
                     borderBottomColor: '#ECECEC', borderRadius: 50,  margin: 5,
                     borderWidth: 3, borderColor: "#ECECEC", borderRadius: 8, elevation: 0,shadowOpacity:0, 
                     shadowRadius:0, shadowOffset:0, shadowColor: "black" , textShadowRadius: 1  }}
                     />

                   </View>




                <View style={{ flex: 3, height: "100%", justifyContent: "flex-end", 
                paddingTop:"5%", paddingBottom:"5%" }}>
                    <Button 
                        touchableOpacity
                        alignItems= 'Flex-end'
                        mode="contained"
                        onPress={() => navigation.navigate("Dashboard")}
                         style={styles_basepantallas.boton_siguiente}>

                     <Text style={{fontFamily: 'Monserrat', fontStyle: 'normal', width:"105",
                                   height:"24",paddingTop:"5%", paddingBottom:"5%"  }}> 
                     </Text>
                      <Text
                        style={styles_basepantallas.btn_texnegro}>
                        siguiente 
                       </Text>

                     </Button>
               
                </View>
                
        
         </View>
         </ScrollView>
       </View>


    );
}