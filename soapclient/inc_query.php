<?php
 require ('inc_config.php');
// SOAP_CLIENT_BASEDIR - folder that contains the PHP Toolkit and your WSDL
// $USERNAME - variable that contains your Salesforce.com username (must be in the form of an email)
// $PASSWORD - variable that contains your Salesforce.ocm password

//define("SOAP_CLIENT_BASEDIR", "../../soapclient");
require_once ('SforcePartnerClient.php');

try {
  $mySforceConnection = new SforcePartnerClient();
  $mySoapClient = $mySforceConnection->createConnection('partner.wsdl.xml');
  $mylogin = $mySforceConnection->login(salesforce_username, salesforce_password . salesforce_token);
  
  $query = 'SELECT Id,Name,Description, Website from Account ORDER BY Name ASC';
  $result = $mySforceConnection->query(($query));
?>

<table class="table table-bordered table-striped">  
<thead>  
<tr>  
<th>Account Name</th>  
<th>Description</th>  
</tr>  
</thead>  
<tbody>    
  

<?php
  for($i = 0; $i < count($result->records); $i++) {
  
    echo '<tr>';
	echo '<td>'.$result->records[$i]->fields->Name.'</td>';
	echo '<td>'.$result->records[$i]->fields->Description.'</td>';
	
	echo '</tr>';
  
  }
 ?>
</tbody>
</table> 
 
<?php
} catch (Exception $e) {
  echo $e->faultstring;
}
?>