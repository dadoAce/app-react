import { StyleSheet } from 'react-native';

export const styles_base = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  margenLateralBase: {
    paddingHorizontal: "5%"
  },

  renglon_centrado: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  columna_centrado: {

  },
  boton_primario: {/**PRIMER PANTALLA*/
    backgroundColor: "#FFBE00",
    width: "100%",
    color: "#000",
    height: 60,
    display: "flex",/** USAR DISTRIBUCIÓN FLEX ( METODO DE ACOMODAR COMPONENTES) */
    flexDirection: "column", /** QUE SEA EN COLUMNA */
    justifyContent: "center",/**CENTRAR VERTICALMENTE EN COLUMNA */
    borderRadius: 10
  },

  btn_txt_negro: {/**PRIMER PANTALLA*/
    color: "#000", fontWeight: "600"
  },

  scrollView: {
    width: '100%',
    height: '100%',
  },
  innerText: {
    color: 'yellow'
  },
  /**ESTILOS PARA LOGIN */
  portada_login: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 20,

  },
  portada_distribucion: {
    display: "flex", justifyContent: "space-between", alignItems: "flex-start", height: "90%"
  },
  portada_Maistro: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 50
  },
  portada_subtitulo: {
    color: "#fff",
    fontSize: 13,
    marginTop: 10
  },
  portada_titulo: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 40
  },
  itemsLista: {
    padding: 10,
    fontSize: 20,
    fontWeight: "400",
    borderColor: "#e2e2e2",
    borderWidth: 1,
    borderStyle: "solid"
  },
  sizeback: {
    fontSize: 35
  },
  menusSuperior: {
    backgroundColor: "#fff"
  },
  inputRegistro: {
    marginTop: 5, height: 50, marginBottom: 15, backgroundColor: '#fff',
    borderBottomColor: '#ECECEC', borderRadius: 50, margin: 5,
    borderWidth: 3, borderColor: "#ECECEC", borderRadius: 8, shadowColor: "black"
  }

});

export const colores = StyleSheet.create({
  primario: {
    color: "#FFBE00"
  },
  secundario: {
    color: "#ECECEC"
  },
  oscuro: {
    color: "#000"
  },
  claro: {
    color: "#8B8B8B"
  },
  blanco: {
    color: "#fff"

  }
});

