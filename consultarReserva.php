<?php

	header("Access-Control-Allow-Origin: *");
	include("conexion.php");
	
	$sql = "SELECT * FROM reserva";
	
	$query = mysqli_query($conexion, $sql);
	
	$cantidadRegistros = mysqli_num_rows($query);
	
	if($cantidadRegistros > 0)
	{
		$tabla = "<table class='table table-striped'>";
		$tabla = $tabla . "<tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Placa</th></tr>";
		while($row = mysqli_fetch_array($query))
		{
			$tabla = $tabla . "<tr><td>" . $row["cedula"] . "</td>";
			$tabla = $tabla . "<td>" . $row["nombre"] . "</td>";
			$tabla = $tabla . "<td>" . $row["apellidos"] . "</td>";
			$tabla = $tabla . "<td>" . $row["placa"] . "</td></tr>";
		}		

		$tabla = $tabla . "</table>";
		echo $tabla;
	}
	else
	{
		echo "No hay registros";
	}

	mysqli_close($conexion);
?>