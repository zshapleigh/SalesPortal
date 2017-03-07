<?php
/*****
Precision Measurment Products
Standard Calibrations Inc.
Northstar Turbine
No Rep
Honeywell
Naunas Sales
Arcom Sales Inc
****/
			

define('DB_SERVER', 'discovery');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'tr350jl');
define('DB_DATABASE', 'sales');
$connection = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die(mysql_error());
$database = mysql_select_db(DB_DATABASE) or die(mysql_error());

if($_POST[submit]){
//db connection here and send to mysql


	
	$sqlS = "INSERT INTO sf_account(cust_type,cust_name,cust_phone,cust_fax,cust_website,cust_description,cust_bstreet,cust_bcity,cust_bstate,cust_bcountry,cust_sstreet,cust_scity,cust_sstate,cust_scountry) 
	VALUES('$_POST[cust_type]','$_POST[cust_name]','$_POST[cust_phone]','$_POST[cust_fax]','$_POST[cust_website]','$_POST[cust_description]','$_POST[cust_bstreet]','$_POST[cust_bcity]','$_POST[cust_bstate]','$_POST[cust_bcountry]','$_POST[cust_sstreet]','$_POST[cust_scity]','$_POST[cust_sstate]','$_POST[cust_scountry]')";
	$resS = mysql_query($sqlS);
	
	
	if(mysql_affected_rows() > 0){

		echo 'we now have recorded SalesForce info';
		
	}else{

		echo 'didnt do anything';
	}

	
}else{

//echo '<form method="post" action=""><input type="submit" name="submit" value="submit"/>';

 require ('inc_config.php');
 //$connection = new SforcePartnerClient();
try {
  $mySforceConnection = new SforcePartnerClient();
  $mySoapClient       = $mySforceConnection->createConnection('partner.wsdl.xml');
  $mylogin            = $mySforceConnection->login(salesforce_username, salesforce_password . salesforce_token);

  $query = "SELECT BillingPostalCode,ShippingPostalCode,Type,Name,Phone,Fax,Website,Description,BillingStreet,BillingCity,BillingState,BillingCountry,ShippingStreet,ShippingCity,ShippingState,ShippingCountry FROM Account ORDER BY Name ASC"; 
  $result = $mySforceConnection->query($query);
	//wont read billingzip and shippingzip ?
  
  
  for($i = 0; $i < count($result->records); $i++) {
  
	$usethis = $result->records[$i]->fields->Name;
  
    //$sqlUSR3 = "SELECT * FROM sf_account WHERE ".$result->records[$i]->fields->Name."='$_POST[cust_name]'";
	$sqlUSR3 = "SELECT * FROM sf_account WHERE cust_name='".$usethis."'";
	$resUSR3 = mysql_query($sqlUSR3);
	$vW3 = mysql_fetch_array($resUSR3);
	//$vW[cust_name];
	
	
	//shows all records that are not stored in both locations (SalesForce & MySQL)
	if(!$vW3[cust_name]){
	
	
	
			
		$cust_type =	$result->records[$i]->fields->Type;
			
	
			
		$cust_name =	$result->records[$i]->fields->Name;
			
			
			
		$cust_phone =	$result->records[$i]->fields->Phone; 
			
			
			
		$cust_fax =	$result->records[$i]->fields->Fax; 
			
			
			
		$cust_website =	$result->records[$i]->fields->Website;
			
				
			
		$cust_description =	$result->records[$i]->fields->Description; 
		
			
			//BILLING
			
		$cust_bstreet =	$result->records[$i]->fields->BillingStreet; 
			
			
		
		$cust_bcity =	$result->records[$i]->fields->BillingCity; 
		
			
			
		$cust_bstate =	$result->records[$i]->fields->BillingState; 
			
			
		
		$cust_bzip =	$result->records[$i]->fields->BillingPostalCode; 
			
			
			
		$cust_bcountry =	$result->records[$i]->fields->BillingCountry; 
			
			
			//SHIPPING
			
		$cust_sstreet =	$result->records[$i]->fields->ShippingStreet; 
			
			
		
		$cust_scity =	$result->records[$i]->fields->ShippingCity; 
			
			
		
		$cust_sstate =	$result->records[$i]->fields->ShippingState; 
			
			
		
		$cust_szip =	$result->records[$i]->fields->ShippingPostalCode; 
			
			
			
		$cust_scountry =	$result->records[$i]->fields->ShippingCountry; 
			

		
		
		
			$sqlS = "INSERT INTO sf_account(cust_type,cust_name,cust_phone,cust_fax,cust_website,cust_description,cust_bstreet,cust_bcity,cust_bstate,cust_bcountry,cust_sstreet,cust_scity,cust_sstate,cust_scountry) 
				VALUES('$cust_type','$cust_name','$cust_phone','$cust_fax','$cust_website','$cust_description','$cust_bstreet','$cust_bcity','$cust_bstate','$cust_bcountry','$cust_sstreet','$cust_scity','$cust_sstate','$cust_scountry')";
			$resS = mysql_query($sqlS);
	}
	
	
  }
} catch(Exception $e) {


  ($e);

  
  
}
//echo '</form>';
}
?>