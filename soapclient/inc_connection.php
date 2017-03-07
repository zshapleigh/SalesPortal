<?php
     require ('inc_config.php');

 if($_POST[enterlead]){
     //Create a new partner object
     $connection = new SforcePartnerClient();
 
     //Create the SOAP connection
     try {
          $connection->createConnection(salesforce_wsdl);
     } catch (Exception $e) {
          echo 'Salesforce could be down, or you have an error in configuration [contact programmer]';
          //Check your WSDL path
     }
 
     //Pass login details to Salesforce
     try {
          $connection->login(salesforce_username, salesforce_password . salesforce_token);
     } catch (Exception $e) {
          echo 'Make sure your username and password is correct. Did the password on your Salesforce account change?';
     }
	 
	      //Describing the Leads object and printing the array
     $describe = $connection->describeSObjects(array('Lead'));
    // print_r($describe);
 
     //Create New Lead
     $leadFirstName = $_POST[firstname];
     $leadLastName = $_POST[lastname];
     $leadCompany = $_POST[company];
     $leadEmail = $_POST[email1];
 
     //Creating the Lead Object
     $lead = new sObject();
     $lead->type = 'Lead';
     $lead->fields = array(
          'FirstName' => $leadFirstName,
          'LastName' => $leadLastName,
          'Company' => $leadCompany,
          'Email' => $leadEmail
     );
 
     //Submitting the Lead to Salesforce
     $result = $connection->create(array($lead), 'Lead');
	 header('http://suflori.com/zssdemo/new_sales/index.php?salesPortal=pages&section=add');
	 //echo 'aaAAAaaAAaaaaW HERE IT GOES (Kenan & Kel Theme Song) -- SUCCESS!';
}else{
?>

<form method="post">

Firstname<input type="text" name="firstname"/><br/><br/>
Lastname<input type="text" name="lastname"/><br/><br/>
Company<input type="text" name="company"/><br/><br/>
Email<input type="text" name="email1"/><br/><br/>


<input type="submit" value="Submit" name="enterlead"/>
</form>

<?php
}
?>