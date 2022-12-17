var expEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var expNumero = /^[0-9]{9}/;

$(document).ready(function(){
    $("#btnEnviar").click(function(){
      var nombre1 = $("#txtNombre1").val();
      var nombre2 = $("#txtNombre2").val();
      var correo = $("#txtCorreo").val();
      var celular = $("#txtCelular").val();
      var mensaje = $("#txtMensaje").val();
      
      if(nombre1 == ""){
        $("#mensaje1").fadeIn();
        return false;
      }else{
          $("#mensaje1").fadeOut();
          if(nombre2 == "" ){
            $("#mensaje2").fadeIn();
            return false;
          }else{
            $("#mensaje2").fadeOut();
            if(correo == "" || !expEmail.test(correo)){
              $("#mensaje3").fadeIn();
              return false;
            }else{
              $("#mensaje3").fadeOut();
              if(celular == "" || !expNumero.test(celular)){
                $("#mensaje4").fadeIn();
                return false;
              }else{
                $("#mensaje4").fadeOut();
                if(mensaje == ""){
                  $("#mensaje5").fadeIn();
                  return false;
                }
              }
            }
          }
      }
  
    });
  });