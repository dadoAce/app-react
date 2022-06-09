import { ImageBackground, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput, Title, Headline } from 'react-native-paper';
import { useState } from 'react';
import { styles_base, colores } from '../../styles/estilosGeneral';
import * as React from 'react';
import * as Progress from 'react-native-progress';
import { Appbar } from 'react-native-paper';



export default function getstarted ({ navigation }) {

    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");
    const [text6, setText6] = useState("");
  
    
    return (
        <View style={styles_base.container}>
            <Appbar.Header style={{ backgroundColor: '#fff', elevation:0}}>
                
                <Appbar.BackAction onPress={() => { }} color="#ffd700" size={45}/>
               
            </Appbar.Header>

            <View style={{ flex: 2, height: "100%", justifyContent: "flex-center", padding: "5%"}}>

                   <Text
                      style={{ color: '#000', marginBottom: 10, 
                      textAlign: "left", width: "100%", 
                      fontWeight:650, fontSize: 32, alignItems: "left"
                         }}>

                  Información basica de ti y tu negocio

                    </Text>


                   <View style={[styles_base.margenLateral, { flex: 2 }]}>
            
                     
                    <TextInput
                     label="Nombre"
                     value={text4}
                     onChangeText={text4 => setText4(text3)}
                     style={{ marginTop: 5, height: 50, marginBottom: 15, backgroundColor: '#fff', borderBottomColor: '#ff0000', 
                     borderRadius: 50
                     }}/>
                    
                    <TextInput
                     label="Apellido"
                     value={text5}
                     onChangeText={text5 => setText5(text4)}
                     style={{ marginTop: 5, height: 50, marginBottom: 15, borderColor: '#7fff00',}}
                    />
                    <TextInput
                     label="Compañia (Opcional)"
                     value={text6}
                     onChangeText={text6 => setText6(text5)}
                     style={{ marginTop: 5, height: 50, marginBottom: 25, backgroundColor: '#fff' }}
                     />

                   </View>




                <View style={{ flex: 2, height: "100%", justifyContent: "flex-end" }}>
                    <Button 
                        touchableOpacity
                        alignItems= 'Flex-end'
                        mode="contained"
                        onPress={() => navigation.navigate("Dashboard")}
                         style={styles_base.boton_primario3}>

                      <Text
                        style={styles_base.btn_txt_negro2}>
                        siguiente 
                       </Text>

                     </Button>
               
                </View>
                
        
         </View>
       
       </View>


    );
}