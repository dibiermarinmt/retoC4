let raiz = "http://129.151.117.196:8080/api/user";
let alerta = "";

function registrarUser(){
    let user = {
        identification: $("#identification").val(),
        name: $("#name").val(),
        address: $("#address").val(),
        cellPhone: $("#cellPhone").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        zone: $("#zone").val(),
        type: $("#type").val()
    };
    $.ajax({
        //crossOrigen: true,
        type:"POST",
        contentType:"application/json; charset=utf-8",
        dataType: "text", //mandaba parse error con JSON
        data: JSON.stringify(user),
        url: raiz + "/new",

        success: function(respose) {
            alert("Se registró usuario correctamente.");
        },

        error: function(xhr, status){
            console.log(status);
            alert("Quizás no se registró.");
        }
    });
}

function nombreValido() {
    if($("#name").val() != "") {
        return true;
    } else {
        alerta ="Nombre no valido.";
        return false;
    }
}

function existeCorreo(correo) {
    let existe = false;
    $.ajax({
        crossOrigin: true,
        url: raiz + "/emailexist/" + correo,
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
    let esCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($("#email").val());
    
    if(!esCorreo) {
        alerta = "No es un correo electrónico valido."
        return false;
    } else if(existeCorreo($("#email").val())) {
        alerta = "Este correo ya está registrado.";
        return false;
    } else {
        return true;
    }
}

function claveValida() {
    if($("#password").val() == "") {
        alerta = "Contraseña vacía. Escriba una contraseña.";
        return false;
    } else if($("#password2").val() == "") {
        alerta = "Reescriba la contraseña en el segundo campo.";
    } else if($("#password").val() != $("#password2").val()) {
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
}
