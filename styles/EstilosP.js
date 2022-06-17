import { StyleSheet } from 'react-native';

export const styles_basepantallas = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    display:"flex",
    margenLateral: "5%"
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
boton_continuar1: {/**PANTALLA VERIFICAR CUENTA*/
backgroundColor: "#FFBE00",
width: 145,
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

boton_siguiente: {/** CUARTA PANTALLA 1/4*/
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

boton_siguiente1: {/** QUINTA PANTALLA 2/4*/
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

boton_siguiente2: {/** SEXTA PANTALLA 3/4*/
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

boton_siguiente3: {/** SEPTIMA PANTALLA 4/4*/
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