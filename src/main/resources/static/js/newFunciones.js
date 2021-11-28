let raiz = "http://localhost:8080/api/user";

function crearUser(){
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
        success:function(respose) {
            console.log("Se guardó correctamente");
            //alert("Se guardó correctametne..");
            //window.location.reload();
            //limpiarFormularioAdmin();
            
        },
        error:function(jqXHR, textStatus, errorTrown){
            
            console.log("No se guardó");
            alert("No se guardó correctamente");
        }
    });
}


function validarDatos() {
    let esCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($("#correo").val());
    let clavesIguales = ($("#clave").val() == $("#clave2").val());
    let 
}

