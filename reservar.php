<?php

    header("Access-Control-Allow-Origin: *");	
    include("conexion.php");
    
	
	$cedula = $_POST["cedula"];
	$nombre = $_POST["nombre"];
	$apellido = $_POST["apellido"];
	$placa = $_POST["placa"];
	
	$sql = "INSERT INTO reserva(cedula, nombre, apellidos, placa) VALUES ('" . $cedula . "','" . $nombre . "','" . $apellido . "','" . $placa . "')";

	$query = mysqli_query($conexion, $sql);
	
	if($query)
	{
		echo "Se creo la reserva del carro " . $placa;
	}
	else
	{
		echo "No fue posible crear la reserva";
	}
	
	mysqli_close($conexion);
?>