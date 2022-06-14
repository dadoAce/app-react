import { ImageBackground, Text, View, SafeAreaView } from 'react-native';
import { Button, Colors, ProgressBar } from 'react-native-paper';
import { TextInput, Title, Headline } from 'react-native-paper';
import { useState } from 'react';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles_basepantallas } from '../../styles/EstilosP';
import { ScrollView } from 'react-native-web';



export default function getstarted ({ navigation }) {

    const [text7, setText7] = useState("");
    const [text8, setText8] = useState("");
    const [text9, setText9] = useState("");
  
    
    return (
        <View style={styles_basepantallas.container}>
          <ScrollView>
            <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               
            </Appbar.Header>

            <View style={{  flex: "100%", height: "100%", justifyContent: "100%"}}>

                  <View style={{flex:3, height: "100%", justifyContent: "100%",
                           padding: "5%",display: "100%"}}>

                   <Text
                      style={{ color: '#000', marginBottom:10 , width: "100%", 
                      fontWeight:700, fontSize: 28, fontStyle: 'normal', width: 353, 
                      height: 68, alignItems: "center", textAlign: "left"
                         }}>
                          

                     Información basica de ti y tu negocio

                    </Text>
                  </View>

                   <View style={[styles_basepantallas.margenLateral, { flex: 12}]}>
          

                    <TextInput
                     label="Nombre"
                     underlineColor='transparent'
                     value={text7}
                     onChangeText={text7 => setText7(text7)}
                     style={{ marginTop: 5, height: 50, marginBottom: 15, backgroundColor: '#fff', 
                     borderBottomColor: '#ECECEC', borderRadius: 50,  margin: 5,
                     borderWidth: 3, borderColor: "#ECECEC", borderRadius: 8,  shadowColor: "black"  
                     }}/>
                    
                    <TextInput
                     label="Apellido"
                     underlineColor='transparent'
                     value={text8}
                     onChangeText={text8 => setText8(text8)}
                     style={{ marginTop: 5, height: 50, marginBottom: 15, backgroundColor: '#fff', 
                     borderBottomColor: '#ECECEC', borderRadius: 50,  margin: 5,
                     borderWidth: 3, borderColor: "#ECECEC", borderRadius: 8,  shadowColor: "black"  
                    }}/>
                    <TextInput
                     label="Compañia (Opcional)"
                     underlineColor='transparent'
                     value={text9}
                     onChangeText={text9 => setText9(text9)}
                     style={{  marginTop: 5, height: 50, marginBottom: '80%', backgroundColor: '#fff', 
                     borderBottomColor: '#ECECEC', borderRadius: 50,  margin: 5, 
                     borderWidth: 3, borderColor: "#ECECEC", borderRadius: 8, shadowColor: "black"  
                     }}/>

                   </View>
                   <View  >
                      <View style={{ flex: 4, height: "100%", width: "100%" ,justifyContent: "flex-end", 
                               paddingTop:"5%", paddingBottom:"5%", margenLateral:"5%" , color: '#ECECEC'}}>
                      <View >
                        <ProgressBar progress={0.25} color={Colors.yellow500}
                                style= {{backgroundColor:'#ECECEC', borderRadius: '10',
                                         margin:"5%"}}>

                        </ProgressBar>
                      </View>
               
                    <Button 
                        touchableOpacity
                        alignItems= 'Flex-end'
                        mode="contained"
                        onPress={() => navigation.navigate("Dashboard")}
                        style={[styles_basepantallas.boton_siguiente, {margenLateral:"5%" , margin: "3%"}]}>

                     <Text style={{fontFamily: 'Monserrat', fontStyle: 'normal', width:"105",
                                   height:"24", }}> 
                     </Text>
                      <Text
                        style={styles_basepantallas.btn_texnegro}>
                        siguiente 
                       </Text>

                     </Button>
               
                </View>
                </View>
         </View>
         </ScrollView>
       </View>


    );
}