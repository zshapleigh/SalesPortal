<?php
     //$dSF[sf_username];
	 define ("salesforce_username", $_SESSION['sfusername']);
    
	//$dSF[sf_password];
	define ("salesforce_password", $_SESSION['sfpassword']);
	 
	 //$dSF[sf_token];
     define ("salesforce_token", $_SESSION['sftoken']);
    // define ("salesforce_wsdl", 'soapclient/partner.wsdl.xml');
     define ("salesforce_wsdl", 'partner.wsdl.xml');
 
    // require_once ('soapclient/SforcePartnerClient.php');
     require_once ('SforcePartnerClient.php');
?>