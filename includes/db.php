<?php

define('DB_SERVER', 'discovery');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'tr350jl');
define('DB_DATABASE', 'sales');
$connection = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die(mysql_error());
$database = mysql_select_db(DB_DATABASE) or die(mysql_error());

?>
