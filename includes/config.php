<?php
//DB CONNECT
			$host="localhost"; // Host name 
			$username_db="mrpuser"; // Mysql username 
			$pass_db="tr350jl"; // Mysql password 
			$db_name="mrp"; // Database name 
			$db_name2="mrp"; // Database name 


			$con = mysql_connect("$host","$username_db","$pass_db");
			if (!$con)
			  {
			  die('Could not connect: ' . mysql_error());
			  }

			mysql_select_db("$db_name", $con);
			
			
			
?>