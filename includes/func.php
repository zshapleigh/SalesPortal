<?php
/************************
	SESSION DISPLAY
*************************/
$sqlUSR = "SELECT * FROM sales_prg_accounts WHERE username='$_SESSION[myusername]'";
$resUSR = mysql_query($sqlUSR);
$display = mysql_fetch_array($resUSR);
//$display[first_name];

//CONNECTS THE FACEBOOK WALL
$sqlUSR2 = "SELECT * FROM users WHERE username='$_SESSION[myusername]'";
$resUSR2 = mysql_query($sqlUSR2);
$display2 = mysql_fetch_array($resUSR2);
//$display2[uid];

//CONNECTS MRP.users
//$sqlUSR3 = "SELECT * FROM sales.sales_prg_accounts WHERE mrp_id='$_SESSION[id]'";
$sqlUSR3 = "SELECT * FROM mrp.accounts WHERE username='$_SESSION[myusername]'";
$resUSR3 = mysql_query($sqlUSR3);
$display3 = mysql_fetch_array($resUSR3);
//$display3[id];

//CONNECTS SALESFORCE.COM
$sqlSF = "SELECT * FROM sales_prg_sf_accounts WHERE username='$_SESSION[myusername]'";
$resSF = mysql_query($sqlSF);
$dSF = mysql_fetch_array($resSF);
//$dSF[sf_username];
//$dSF[sf_password];
//$dSF[sf_token];

//SP CALENDAR
$sqlCAL = "SELECT * FROM sales_prg_calendar WHERE sls_cal_id='1'";
$resCAL = mysql_query($sqlCAL);
$dCAL = mysql_fetch_array($resCAL);
//$dCAL[sls_cal_mem_m]

//MU DEPARTMENTS
//ONLY USED ON THE "ADD FORM"
if($_POST[MU] == 2){
$mM = "2";
}
if($_POST[MU] == 4){
$mM = "3";
}
if($_POST[MU] == 1){
$mM = "4";
}
if($_POST[MU] == "E"){
$mM = "5";
}
if($_POST[MU] == "I"){
$mM = "14";
}
if($_POST[MU] == "X"){
$mM = "15";
}
if($_POST[MU] == 3){
$mM = "16";
}
if($_POST[MU] == "P"){
$mM = "19";
}
if($_POST[MU] == "A"){
$mM = "20";
}
if($_POST[MU] == 5){
$mM = "22";
}
if($_POST[MU] == "F"){
$mM = "29";
}

if($_POST[textbox32] == 2){
$mM = "2";
}
if($_POST[textbox32] == 4){
$mM = "3";
}
if($_POST[textbox32] == 1){
$mM = "4";
}
if($_POST[textbox32] == "E"){
$mM = "5";
}
if($_POST[textbox32] == "I"){
$mM = "14";
}
if($_POST[textbox32] == "X"){
$mM = "15";
}
if($_POST[textbox32] == 3){
$mM = "16";
}
if($_POST[textbox32] == "P"){
$mM = "19";
}
if($_POST[textbox32] == "A"){
$mM = "20";
}
if($_POST[textbox32] == 5){
$mM = "22";
}
if($_POST[textbox32] == "F"){
$mM = "29";
}
if($_POST[textbox33] == 2){
$mM = "2";
}
if($_POST[textbox33] == 4){
$mM = "3";
}
if($_POST[textbox33] == 1){
$mM = "4";
}
if($_POST[textbox33] == "E"){
$mM = "5";
}
if($_POST[textbox33] == "I"){
$mM = "14";
}
if($_POST[textbox33] == "X"){
$mM = "15";
}
if($_POST[textbox33] == 3){
$mM = "16";
}
if($_POST[textbox33] == "P"){
$mM = "19";
}
if($_POST[textbox33] == "A"){
$mM = "20";
}
if($_POST[textbox33] == 5){
$mM = "22";
}
if($_POST[textbox33] == "F"){
$mM = "29";
}
if($_POST[textbox34] == 2){
$mM = "2";
}
if($_POST[textbox34] == 4){
$mM = "3";
}
if($_POST[textbox34] == 1){
$mM = "4";
}
if($_POST[textbox34] == "E"){
$mM = "5";
}
if($_POST[textbox34] == "I"){
$mM = "14";
}
if($_POST[textbox34] == "X"){
$mM = "15";
}
if($_POST[textbox34] == 3){
$mM = "16";
}
if($_POST[textbox34] == "P"){
$mM = "19";
}
if($_POST[textbox34] == "A"){
$mM = "20";
}
if($_POST[textbox34] == 5){
$mM = "22";
}
if($_POST[textbox34] == "F"){
$mM = "29";
}
if($_POST[textbox35] == 2){
$mM = "2";
}
if($_POST[textbox35] == 4){
$mM = "3";
}
if($_POST[textbox35] == 1){
$mM = "4";
}
if($_POST[textbox35] == "E"){
$mM = "5";
}
if($_POST[textbox35] == "I"){
$mM = "14";
}
if($_POST[textbox35] == "X"){
$mM = "15";
}
if($_POST[textbox35] == 3){
$mM = "16";
}
if($_POST[textbox35] == "P"){
$mM = "19";
}
if($_POST[textbox35] == "A"){
$mM = "20";
}
if($_POST[textbox35] == 5){
$mM = "22";
}
if($_POST[textbox35] == "F"){
$mM = "29";
}
if($_POST[textbox36] == 2){
$mM = "2";
}
if($_POST[textbox36] == 4){
$mM = "3";
}
if($_POST[textbox36] == 1){
$mM = "4";
}
if($_POST[textbox36] == "E"){
$mM = "5";
}
if($_POST[textbox36] == "I"){
$mM = "14";
}
if($_POST[textbox36] == "X"){
$mM = "15";
}
if($_POST[textbox36] == 3){
$mM = "16";
}
if($_POST[textbox36] == "P"){
$mM = "19";
}
if($_POST[textbox36] == "A"){
$mM = "20";
}
if($_POST[textbox36] == 5){
$mM = "22";
}
if($_POST[textbox36] == "F"){
$mM = "29";
}
if($_POST[textbox37] == 2){
$mM = "2";
}
if($_POST[textbox37] == 4){
$mM = "3";
}
if($_POST[textbox37] == 1){
$mM = "4";
}
if($_POST[textbox37] == "E"){
$mM = "5";
}
if($_POST[textbox37] == "I"){
$mM = "14";
}
if($_POST[textbox37] == "X"){
$mM = "15";
}
if($_POST[textbox37] == 3){
$mM = "16";
}
if($_POST[textbox37] == "P"){
$mM = "19";
}
if($_POST[textbox37] == "A"){
$mM = "20";
}
if($_POST[textbox37] == 5){
$mM = "22";
}
if($_POST[textbox37] == "F"){
$mM = "29";
}
if($_POST[textbox38] == 2){
$mM = "2";
}
if($_POST[textbox38] == 4){
$mM = "3";
}
if($_POST[textbox38] == 1){
$mM = "4";
}
if($_POST[textbox38] == "E"){
$mM = "5";
}
if($_POST[textbox38] == "I"){
$mM = "14";
}
if($_POST[textbox38] == "X"){
$mM = "15";
}
if($_POST[textbox38] == 3){
$mM = "16";
}
if($_POST[textbox38] == "P"){
$mM = "19";
}
if($_POST[textbox38] == "A"){
$mM = "20";
}
if($_POST[textbox38] == 5){
$mM = "22";
}
if($_POST[textbox38] == "F"){
$mM = "29";
}
if($_POST[textbox39] == 2){
$mM = "2";
}
if($_POST[textbox39] == 4){
$mM = "3";
}
if($_POST[textbox39] == 1){
$mM = "4";
}
if($_POST[textbox39] == "E"){
$mM = "5";
}
if($_POST[textbox39] == "I"){
$mM = "14";
}
if($_POST[textbox39] == "X"){
$mM = "15";
}
if($_POST[textbox39] == 3){
$mM = "16";
}
if($_POST[textbox39] == "P"){
$mM = "19";
}
if($_POST[textbox39] == "A"){
$mM = "20";
}
if($_POST[textbox39] == 5){
$mM = "22";
}
if($_POST[textbox39] == "F"){
$mM = "29";
}
if($_POST[textbox310] == 2){
$mM = "2";
}
if($_POST[textbox310] == 4){
$mM = "3";
}
if($_POST[textbox310] == 1){
$mM = "4";
}
if($_POST[textbox310] == "E"){
$mM = "5";
}
if($_POST[textbox310] == "I"){
$mM = "14";
}
if($_POST[textbox310] == "X"){
$mM = "15";
}
if($_POST[textbox310] == 3){
$mM = "16";
}
if($_POST[textbox310] == "P"){
$mM = "19";
}
if($_POST[textbox310] == "A"){
$mM = "20";
}
if($_POST[textbox310] == 5){
$mM = "22";
}
if($_POST[textbox310] == "F"){
$mM = "29";
}
if($_POST[textbox311] == 2){
$mM = "2";
}
if($_POST[textbox311] == 4){
$mM = "3";
}
if($_POST[textbox311] == 1){
$mM = "4";
}
if($_POST[textbox311] == "E"){
$mM = "5";
}
if($_POST[textbox311] == "I"){
$mM = "14";
}
if($_POST[textbox311] == "X"){
$mM = "15";
}
if($_POST[textbox311] == 3){
$mM = "16";
}
if($_POST[textbox311] == "P"){
$mM = "19";
}
if($_POST[textbox311] == "A"){
$mM = "20";
}
if($_POST[textbox311] == 5){
$mM = "22";
}
if($_POST[textbox311] == "F"){
$mM = "29";
}


//$dM[id]
/****************************

	TEST CODE -- VARIABLES

*****************************/

//$equalT = $_POST['Unit_Price'] * $_POST['Qty'];


/*****************************
	QUERYSTRING FUNCTION
*****************************/
function appendToQueryString($qString, $extra)
{
	$qArray = explode("&", $qString);
	$xArray = explode("&", $extra);
	$tags = array();
	$values = array();
	$count = 0;
	//echo '<pre>';
		//echo 'QSTIRNG: ';
		//print_r($qArray);
		//echo 'XTRA: ';
		//print_r($xArray);
		for($i=0;$i<count($qArray);$i++)
		{
			$qStuff[$i] = explode("=", $qArray[$i]);
			$tags[$qStuff[$i][0]] = $qStuff[$i][1];
			for($j=0;$j<count($xArray);$j++)
			{
				$xStuff = explode("=", $xArray[$j]);
				$tags[$xStuff[0]] = $xStuff[1];
			}
		}
		//print_r($tags);
	//echo '</pre>';
	$newQstring = '?';
	foreach($tags as $key => $val)
	{
		//if($val != 0 && $val != '')
			$newQstring .= $key.'='.$val.'&';
	}
	$newQstring = rtrim($newQstring, '&');
	return $newQstring;
	//return '?'.$qstring.'&'.$extra;
}
/*****************************
	END QUERYSTRING FUNCTION
*****************************/
?>