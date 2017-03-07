<?php

 require ('inc_config.php');
 //$connection = new SforcePartnerClient();
try {
  $mySforceConnection = new SforcePartnerClient();
  $mySoapClient       = $mySforceConnection->createConnection('partner.wsdl.xml');
  $mylogin            = $mySforceConnection->login(salesforce_username, salesforce_password . salesforce_token);

  $query = "SELECT Name,Company,Email,Status,State FROM Lead ORDER BY Name ASC"; 
  $result = $mySforceConnection->query($query);
	//wont read billingzip and shippingzip ?
 ?>
 
 <a href="?salesPortal=pages&section=view">New Lead</a>
 
<table class="table table-bordered table-striped">  
<thead>  
<tr>  
<th>Name</th>  
<th>Company</th> 
<th>State</th> 
<th>Email</th>  
<th>Status</th>  
</tr>  
</thead>  
<tbody>    
   
 
<?php
  
  for($i = 0; $i < count($result->records); $i++) {
  	

	echo '<tr>';
	echo '<td>'.$result->records[$i]->fields->Name.'</td>';
	echo '<td>'.$result->records[$i]->fields->Company.'</td>';	
	echo '<td>'.$result->records[$i]->fields->State.'</td>';	
	echo '<td>'.$result->records[$i]->fields->Email.'</td>';	
	echo '<td>'.$result->records[$i]->fields->Status.'</td>';	
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