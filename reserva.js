window.onload = function()
{
	$("#btnReserva").click(enviar);
}

function enviar() 
{ 
  var nombre = $("#nombre").val(); 
  var apellido = $("#apellido").val(); 
  var placa = $("#placa").val(); 
  var cedula = $("#cedula").val(); 

  $.ajax({ 
  async:true, 
  type: "POST", 
  dataType: "html", contentType: "application/x-www-form-urlencoded", 
  url:"reservar.php", 
  data:"nombre="+nombre+"&apellido="+apellido+"&placa="+placa+"&cedula="+cedula, beforeSend:inicioEnvio, success:llegadaDatos, 
  timeout:4000, 
  error:problemas }); 
  return false; 
} 

 function inicioEnvio(datos)
{
	$("#divLoader").removeClass("nb-hidden");
}

function llegadaDatos(datos)
{
	$("#divLoader").addClass("nb-hidden");
	$("#divWarning").addClass("nb-hidden");
	$("#divSucces").removeClass("nb-hidden");
	$("#divSucces").text(datos);
}

function problemas()
{
	$("#divLoader").addClass("nb-hidden");
	$("#divSucces").addClass("nb-hidden");
	$("#divWarning").removeClass("nb-hidden");
	$("#divSucces").text('Problemas en el servidor.');
}
