

export const iniciarSesion = (correo, password ) => {

    var url = 'https://www.dadoroom.com/maistro/Usuario/iniciarSesion';
    var data = { "correo": correo, "password": password };

    console.log({data   })
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
