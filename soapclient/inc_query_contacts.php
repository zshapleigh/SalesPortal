<?php
 require ('inc_config.php');
// SOAP_CLIENT_BASEDIR - folder that contains the PHP Toolkit and your WSDL
// $USERNAME - variable that contains your Salesforce.com username (must be in the form of an email)
// $PASSWORD - variable that contains your Salesforce.ocm password

//define("SOAP_CLIENT_BASEDIR", "../../soapclient");
require_once ('SforceEnterpriseClient.php');

try {
  $mySforceConnection = new SforceEnterpriseClient();
  $mySoapClient = $mySforceConnection->createConnection('enterprise.wsdl.xml');
  $mylogin = $mySforceConnection->login(salesforce_username, salesforce_password . salesforce_token);
  
  //$query = 'SELECT Id,Name from Account ORDER BY Name ASC';
  //$response = $mySforceConnection->query(($query));
  
   $query = "SELECT FirstName,LastName,Title,Phone,Fax,MobilePhone,Email,MailingStreet,MailingCity,MailingState,MailingCountry,OtherStreet,OtherCity,OtherState,OtherCountry,Description,MailingPostalCode,OtherPostalCode FROM Contact ORDER BY FirstName ASC"; 
  $response = $mySforceConnection->query($query);

  echo salesforce_token;
  foreach ($response->records as $record) {
  
  echo '<input type="text" value="';
	print_r($record->fields->FirstName);
	echo '"/><br/><br/>';
  
  }
} catch (Exception $e) {
  echo $e->faultstring;
}
?>