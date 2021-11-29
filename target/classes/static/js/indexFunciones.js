let raiz = "http://129.151.117.196:8080/api/user";

function entrarUser(){
    let correo = $("#correo").val();
    let clave = $("#clave").val();

    $.ajax({
        url: raiz + "/" + correo + "/" + clave,
        type: "GET",
        dataType: "JSON",

        success: function(json) {
            console.log(json);
            if(json.name != "NO DEFINIDO") {
                alert("Bienvenido " + json.name +" ! ! !");
            } else {
                alert("El usuario no está en la base. Revisa tus credenciales o crea un usuario nuevo");
            }
        }
    });
}


