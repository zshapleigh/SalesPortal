<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Sales Portal</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link href="style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="coin-slider.css" />
<link type="text/css" href="js/jQuery/themes/base/jquery.ui.all.css" rel="stylesheet" />
<link rel="stylesheet" id="font-awesome-style-css" href="http://phpflow.com/code/css/bootstrap3.min.css" type="text/css" media="all">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<!-- CuFon starts -->
<script type="text/javascript" src="js/cufon-yui.js"></script>
<script type="text/javascript" src="js/cufon-sansation.js"></script>
<!--<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>-->
<?php

include('js/script.php');
?>
<!--<script type="text/javascript" src="js/other.js"></script>-->
<script type="text/javascript" src="js/coin-slider.min.js"></script>
<!-- CuFon ends -->

<!--DATE PICKER-->

<script type="text/javascript" src="js/jQuery/ui/jquery.ui.core.js"></script>
<script type="text/javascript" src="js/jQuery/ui/jquery.ui.widget.js"></script>
<script type="text/javascript" src="js/jQuery/ui/jquery.ui.position.js"></script>
<script type="text/javascript" src="js/jQuery/ui/jquery.ui.datepicker.js"></script>
<script type="text/javascript" src="js/jQuery/ui/jquery.ui.autocomplete.js"></script>
<script type="text/javascript" src="js/jQuery/ui/jquery.ui.resizable.js"></script>
<script type="text/javascript" src="js/jQuery/ui/jquery.ui.mouse.js"></script>

<!-- Form Validation 
<script type="text/javascript" src="http://jzaefferer.github.com/jquery-validation/jquery.validate.js"></script>
-->
<!-- qTip2 
<link rel="stylesheet" type="text/css" href="http://craigsworks.com/projects/qtip2/packages/latest/jquery.qtip.min.css" />
<script type="text/javascript" src="http://craigsworks.com/projects/qtip2/packages/latest/jquery.qtip.min.js"></script>
-->
<!-- WALL THREAD -->
<link href="css/wall.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.oembed.js"></script>
<script type="text/javascript" src="js/wall.js"></script>


<!-- FACEBOX / LIGHT BOX -->
<link type="text/css" href="css/facebox.css" rel="stylesheet" />
<script type="text/javascript" src="js/facebox.js"></script>
<script type="text/javascript">
	//FACEBOX
    jQuery(document).ready(function($) {
      $('a[rel*=facebox]').facebox({
        loadingImage : 'css/loading.gif',
        closeImage   : 'css/closelabel.png'
      })
    })

	//VALIDATION
  $(document).ready(function(){
    $("#alertForm").validate();
    $("#addRecord").validate();
  });
  
</script>
</head>
<body>
<div class="main">

  <div class="header">
    <div class="header_resize">
      <div class="logo">
        <h1><a href="index.php"><span>Sales Portal</span> <small>HealthView &copy;<?=date('Y')?></small></a></h1>
      </div>
	  
	  <!--SEARCH FUNCTION-->
      <div class="searchform">
	 
		<!-- DISPLAY WHEN LOGGED IN-->
        <form id="formsearch" name="formsearch" method="get" action="">
		<input type="hidden" name="salesPortal" id="salesPortal" value="pages" />
		<input type="hidden" name="section" id="section" value="search" />
		<?php
			if(isset($_SESSION['sfusername'])
	&& isset($_SESSION['sfpassword'])
	&& isset($_SESSION['sftoken'])){
		?>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="logout.php">Logout</a> <!-- <a href="pages/help.php" rel="facebox">help</a><br/>-->
		<?php
	
			}
		//NO LOGIN REQUIRED TO SEARCH FOR CERTAIN INFORMATION		
		?>
		
			<!--<table>
				<Tr>
					<td>
							<input type="checkbox" alt="Click here to search more fields" title="Click here to search more fields" name="" id="searchmore"/>
					</td>
					<td>
							<span><input name="Q_ID" placeholder="search Q-ID..." class="editbox_search qidh" id="editbox_search" maxlength="80" value="" type="text" /></span>
							<input type="submit" value="go" id="button" name="submit"/>
					</td>
				</tr>
			</table>
			
		
			<div class="expand" style="display:none">
			
				<span><input name="REP"  placeholder="search REP..." class="editbox_search" id="editbox_search" maxlength="80" value="" type="text" /></span><br/>
				<span><input name="CUSTCODE"  placeholder="search Customer Code..."  class="editbox_search" id="custcodeh" maxlength="80" value="" type="text" /></span><br/>
				<span><input name="St" placeholder="search Status..."  class="editbox_search" id="editbox_search" maxlength="80" value="" type="text" /></span><br/>
				<span><input name="QualDue" placeholder="search QualDue Date..."  class="editbox_search" id="qualdueh" maxlength="80" value="" type="text" /></span><br/>
		
			
			</div> -->
			
		</form>
		
      
	  </div>
      
	  
	  <div class="clr"></div>
      <div class="rss">
        <p>Go To <a href="http://salesforce.com" target="_BLANK">Salesforce.com</a> <!--<a href=""><img src="" width="16" height="16" alt="rss" /></a>--></p>
      </div>
      <div class="menu_nav">
        <ul>
		 <?php
		//if(session_is_registered(myusername)){
			if(isset($_SESSION['sfusername'])
	&& isset($_SESSION['sfpassword'])
	&& isset($_SESSION['sftoken'])){
		?>
          <li class="active"><a href="?salesPortal"><span>Home</span></a></li>
          <li><a href="?salesPortal=pages&section=add"><span>Leads</span></a></li>
		  <li><a href="?salesPortal=pages&section=search"><span>Accounts</span></a></li>
          <li><a href="?salesPortal=pages&section=alert"><span>Opportunities</span></a></li>
        
		      
          
		 
         <?php
		
         }
		 ?>
        </ul>
      </div>
      <div class="clr"></div>
     
      <div class="clr"></div>
    </div>
  </div>