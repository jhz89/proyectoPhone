window.onload = function()
{
	enviar();
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
  url:"consultarReserva.php", 
  data:"", beforeSend:inicioEnvio, success:llegadaDatos, 
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
	$("#divReservas").html(datos);
}

function problemas()
{
	$("#divLoader").addClass("nb-hidden");
	$("#divSucces").text('Problemas en el servidor.');
}
