<?php 

session_start();

include("includes/sfconfig.php"); 
include("includes/func.php"); 
include("includes/header.php");

if(!$_POST[submit] && ! isset($_SESSION['sfusername'])
	&& !isset($_SESSION['sfpassword'])
	&& ! isset($_SESSION['sftoken'])){
//header("location:main_login.php");


echo '
<div id="parent">
<h2>Login here</h2>
<form method="post" id="form_login">
<p>username: <input type="text" name="myusername" id="" value=""/></p>
<p>password: <input type="password" name="mypassword" id="" value=""/></p>
<p>token: <input type="password" name="mytoken" id="" value=""/></p>

<input type="submit" name="submit" id="button" value="login"/>
</form>
</div>
';

}else{
?>
  <div class="content">
    <div class="content_resize">
      
	  <?php
	  if($_POST[submit]){
		  $_SESSION['sfusername'] = $_POST['myusername'];
		  $_SESSION['sfpassword'] = $_POST['mypassword'];
		  $_SESSION['sftoken'] = $_POST['mytoken'];
	  }
		//if(!$_POST[button_search]){
		//header("location:index.php?salesPortal");
		//include("includes/soapclient/inc_query_contacts.php");
			
			//?salesPortal=pages&section=[select from below]
			switch($_REQUEST[salesPortal])
			{
			
				//$config['filePath'] = /home/vern01/public_html/zssdemo/new_sales/
				//DEFAULT LANDING PAGE
				default:
					require_once "soapclient/get_contacts.php";//$config['filePath']."pages/main.php";
				break;

				//WEBPAGE PAGES FOR GENERAL
				case 'pages':
					
					
					switch($_REQUEST[section])
					{
						case 'build':
							require_once $config['filePath']."pages/build.php";
						break;

						case 'add':
							//require_once $config['filePath']."pages/add.php";
							require_once "soapclient/get_leads.php";
						break;
						
						case 'edit':
							require_once $config['filePath']."pages/edit.php";
							//require_once $config['filePath']."pages/edit_test_new.php";
						break;
						
						case 'view':
							//require_once $config['filePath']."pages/view.php";
							require_once "soapclient/inc_connection.php";
						break;
						
						case 'search':
							//require_once $config['filePath']."pages/search.php";
							require_once "soapclient/inc_query.php";
						break;
						
						case 'alert':
							//require_once $config['filePath']."pages/alerts.php";
							require_once "soapclient/get_opp.php";
						break;
						
						case 'reports':
							require_once $config['filePath']."pages/reports.php";
						break;
						
					
					}
				break;
				
				//ADMIN SECTION
				case 'adminPage':
				
				switch($_REQUEST[section])
					{
						case 'admin':
							
							require_once $config['filePath']."admin/index.php";
						break;
						
						case 'vclose':
							
							require_once $config['filePath']."admin/view.php";
						break;
						
						case 'edituser':
							
							require_once $config['filePath']."admin/edit_user.php";
						break;
					}
				
				break;
			}
		

			//include("pages/sidebars.php");
	
	    ?>
	</div>
  </div>
<?php
}
include("includes/footer.php");
?>

