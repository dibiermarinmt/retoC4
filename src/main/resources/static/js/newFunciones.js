let raiz = "http://localhost:8080/api/user";

function registrarUser(){
    let user = {
        name: $("#nombre").val(),
        email: $("#correo").val(),
        password: $("#clave").val()
    };
    $.ajax({
        type:'POST',
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(user),
        url: raiz + "/new",

        success: function(respose) {
            alert("Se registró usuario correctamente");
        }
    });
}

function datosValidos() {
    //let esCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($("#correo").val());
    let clavesIguales = ($("#clave").val() == $("#clave2").val());
    return clavesIguales;
}

function crearUser() {
    if(datosValidos()) {
        registrarUser();
    } else {
        alert("Usuario no creado");
    }
}
