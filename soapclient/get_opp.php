<?php

 require ('inc_config.php');
 //$connection = new SforcePartnerClient();
try {
  $mySforceConnection = new SforcePartnerClient();
  $mySoapClient       = $mySforceConnection->createConnection('partner.wsdl.xml');
  $mylogin            = $mySforceConnection->login(salesforce_username, salesforce_password . salesforce_token);

  $query = "SELECT Name,Amount,Probability,Description,CloseDate,NextStep FROM Opportunity ORDER BY Name ASC"; 
  $result = $mySforceConnection->query($query);
	//wont read billingzip and shippingzip ?
 ?>
 
<table class="table table-bordered table-striped">  
<thead>  
<tr>  
<th>Name</th>  
<th>Probability</th> 
<th>Amount</th>  
</tr>  
</thead>  
<tbody>    
   
 
<?php
  
  for($i = 0; $i < count($result->records); $i++) {
  	

	echo '<tr>';
	echo '<td>'.$result->records[$i]->fields->Name.'</td>';
	echo '<td>'.$result->records[$i]->fields->Probability.'</td>';	
	echo '<td>'.$result->records[$i]->fields->Amount.'</td>';	
	echo '</tr>';
	
  }
  
 ?>
 
 </thead>
 </table>
 
 <?php
} catch(Exception $e) {


  ($e);

  
  
}

?>