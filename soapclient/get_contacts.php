<?php

 require ('inc_config.php');
 //$connection = new SforcePartnerClient();
try {
  $mySforceConnection = new SforcePartnerClient();
  $mySoapClient       = $mySforceConnection->createConnection('partner.wsdl.xml');
  $mylogin            = $mySforceConnection->login(salesforce_username, salesforce_password . salesforce_token);

  $query = "SELECT FirstName,LastName,Title,Phone,Fax,MobilePhone,Email,MailingStreet,MailingCity,MailingState,MailingCountry,OtherStreet,OtherCity,OtherState,OtherCountry,Description,MailingPostalCode,OtherPostalCode FROM Contact ORDER BY FirstName ASC"; 
  $result = $mySforceConnection->query($query);
	//wont read billingzip and shippingzip ?
  
  ?>
  
<table class="table table-bordered table-striped">  
<thead>  
<tr>  
<th>FirstName</th>  
<th>LastName</th>  
<th>Phone</th>  
<th>Email</th>  
</tr>  
</thead>  
<tbody>    
  
  <?php
  for($i = 0; $i < count($result->records); $i++) {
  
	$usethis = $result->records[$i]->fields->FirstName;
  
    //$sqlUSR3 = "SELECT * FROM sf_account WHERE ".$result->records[$i]->fields->Name."='$_POST[cust_name]'";
	
	//$sqlUSR3 = "SELECT * FROM sf_account WHERE cust_name='".$usethis."'";
	//$resUSR3 = mysql_query($sqlUSR3);
	//$vW3 = mysql_fetch_array($resUSR3);
	
	//$vW[cust_name];
	
	
	//shows all records that are not stored in both locations (SalesForce & MySQL)
	//if(!$vW3[cust_name]){
	//echo '<input type="text" value="';
	echo '<tr>';
	echo '<td>'.$result->records[$i]->fields->FirstName.'</td>';
	echo '<td>'.$result->records[$i]->fields->LastName.'</td>';
	echo '<td>'.$result->records[$i]->fields->Phone.'</td>';
	echo '<td>'.$result->records[$i]->fields->Email.'</td>';
	echo '</tr>';
	//echo '"/><br/><br/>';
	}		
?>

</tbody>  
</table>  

<?php
  
} catch(Exception $e) {


  ($e);
echo $e;
  
  


}
?>

