 

async function _getSucursales(datos) {

    
    try {

        let api = 'https://api.dev.ancona.iikno.com/Sucursales?USUARIO='
            + usuario.NombreUsuario
            + '&TOKEN=' + usuario.Token;

        var resp = await fetch(api);
        var response = await resp.json();
        return response;

    } catch (error) {
        console.log(error)
        return false;

    }
    return [];

}
export { _getSucursales };
/***
 *   
 */