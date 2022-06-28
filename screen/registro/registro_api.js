export const registro = (datos) => {
    console.log({datos})
    var url = 'https://www.dadoroom.com/maistro/Usuario/registrar';
    var data = {
        "correo": datos.correo,
        "password": datos.pass,
        "rol": datos.rol,
        "nombre": datos.nombre,
        "apellido": datos.apellido,
        "compania": datos.compania,
        "industria": datos.industria,
        "estado": datos.Ubicacion,
        "industria": datos.industria
    };

    console.log({ data })
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res.json())
    })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}
