<?php
     //Describing the Leads object and printing the array
     $describe = $connection->describeSObjects(array('Lead'));
     print_r($describe);
 
     //Create New Lead
     $leadFirstName = "Ahmed";
     $leadLastName = "Dirie";
     $leadCompany = "Pick Yours Up";
     $leadEmail = "adirie@pickyoursup.com";
 
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
?>