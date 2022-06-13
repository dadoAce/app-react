import { StyleSheet } from 'react-native';

export const styles_basepantallas = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    display:"flex",
    
  },
  margenLateral: {
    paddingHorizontal: "3%"
  },
  
  renglon_centrado: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  columna_centrado: {

  },
  
  scrollView: {
    width: '100%',
    height: '100%',
  },


  btn_texnegro: {/**SEG PANTALLA*/
  color: "#000", fontWeight: "600"
},

boton_continuar: {/**SEG PANTALLA*/
backgroundColor: "#FFBE00",
width: "390",
color: "#000",
height: 50,
display: "flex",/** USAR DISTRIBUCIÓN FLEX ( METODO DE ACOMODAR COMPONENTES) */
flexDirection: "column", /** QUE SEA EN COLUMNA */
justifyContent: "center",/**CENTRAR VERTICALMENTE EN COLUMNA */
borderRadius: 10,
marginBotton:25
},
boton_comenzar: {/** TERCER PANTALLA*/
backgroundColor: "#FFBE00",
width: "390",
color: "#000",
height: 50,
display: "flex",/** USAR DISTRIBUCIÓN FLEX ( METODO DE ACOMODAR COMPONENTES) */
flexDirection: "column", /** QUE SEA EN COLUMNA */
justifyContent: "center",/**CENTRAR VERTICALMENTE EN COLUMNA */
borderRadius: 10,
marginBotton:100

},

boton_siguiente: {/** CUARTA PANTALLA*/
backgroundColor: "#FFBE00",
width: "390",
color: "#000",
height: 50,
display: "flex",/** USAR DISTRIBUCIÓN FLEX ( METODO DE ACOMODAR COMPONENTES) */
flexDirection: "column", /** QUE SEA EN COLUMNA */
justifyContent: "center",/**CENTRAR VERTICALMENTE EN COLUMNA */
borderRadius: 10,
marginBotton:100

},
primario: {
  color: "#FFBE00"
},

scrollView: {
  width: '100%',
  height: '100%',
},
innerText: {
  color: 'yellow'
},


  }
);