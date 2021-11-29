let raiz = "http://129.151.117.196:8080/api/user";
let alerta = "";

function registrarUser(){
    let user = {
        name: $("#nombre").val(),
        email: $("#correo").val(),
        password: $("#clave").val()
    };
    $.ajax({
        //crossOrigen: true,
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

function nombreValido() {
    if($("#nombre").val() != "") {
        return true;
    } else {
        alerta ="Nombre no valido.";
        return false;
    }
}


function existeCorreo(correo) {
    let existe = false;
    $.ajax({
        //crossOrigin: true,
        url: raiz + "/" + correo,
        type: "GET",
        async: false,
        dataType: "JSON",
        success: function(respuesta) {
            existe = respuesta;
        }
    });
    return existe;
}

function correoValido() {
    let esCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($("#correo").val());
    
    if(!esCorreo) {
        alerta = "No es un correo electrónico valido."
        return false;
    } else if(existeCorreo($("#correo").val())) {
        alerta = "Este correo ya está registrado.";
        return false;
    } else {
        return true;
    }
}

function claveValida() {
    if($("#clave").val() == "") {
        alerta = "Contraseña vacía. Escriba una contraseña.";
        return false;
    } else if($("#clave2").val() == "") {
        alerta = "Reescriba la contraseña en el segundo campo.";
    } else if($("#clave").val() != $("#clave2").val()) {
        alerta = "Contraseñas diferentes.";
        return false;
    } else {
        return true;
    }
}


function datosValidos() {
    let validos = true;
    validos = validos && nombreValido();
    validos = validos && correoValido();
    validos = validos && claveValida();
    return validos;
}

function crearUser() {
    if(datosValidos()) {
        registrarUser();
    } else {
        alert(alerta);
        alerta = "";
    }
    //console.log(existeCorreo($("#correo").val()));
}
