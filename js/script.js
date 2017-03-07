//PAGINATION CLICK / HIGHLIGHT

	var arrayOfRolloverClasses = new Array();
	var arrayOfClickClasses = new Array();
	var activeRow = false;
	var activeRowClickArray = new Array();
	
	function highlightTableRow()
	{
		var tableObj = this.parentNode;
		if(tableObj.tagName!='TABLE')tableObj = tableObj.parentNode;

		if(this!=activeRow){
			this.setAttribute('origCl',this.className);
			this.origCl = this.className;
		}
		this.className = arrayOfRolloverClasses[tableObj.id];
		
		activeRow = this;
		
	}
	
	function clickOnTableRow()
	{
		var tableObj = this.parentNode;
		if(tableObj.tagName!='TABLE')tableObj = tableObj.parentNode;		
		
		if(activeRowClickArray[tableObj.id] && this!=activeRowClickArray[tableObj.id]){
			activeRowClickArray[tableObj.id].className='';
		}
		this.className = arrayOfClickClasses[tableObj.id];
		
		activeRowClickArray[tableObj.id] = this;
				
	}
	
	function resetRowStyle()
	{
		var tableObj = this.parentNode;
		if(tableObj.tagName!='TABLE')tableObj = tableObj.parentNode;

		if(activeRowClickArray[tableObj.id] && this==activeRowClickArray[tableObj.id]){
			this.className = arrayOfClickClasses[tableObj.id];
			return;	
		}
		
		var origCl = this.getAttribute('origCl');
		if(!origCl)origCl = this.origCl;
		this.className=origCl;
		
	}
		
	function addTableRolloverEffect(tableId,whichClass,whichClassOnClick)
	{
		arrayOfRolloverClasses[tableId] = whichClass;
		arrayOfClickClasses[tableId] = whichClassOnClick;
		
		var tableObj = document.getElementById(tableId);
		var tBody = tableObj.getElementsByTagName('TBODY');
		if(tBody){
			var rows = tBody[0].getElementsByTagName('TR');
		}else{
			var rows = tableObj.getElementsByTagName('TR');
		}
		for(var no=0;no<rows.length;no++){
			rows[no].onmouseover = highlightTableRow;
			rows[no].onmouseout = resetRowStyle;
			
			if(whichClassOnClick){
				rows[no].onclick = clickOnTableRow;	
			}
		}
		
	}


//DELETE ALERTS UNDER YOUR PROFILE
function cBox(id)
{
	if(window.confirm("Are you sure you want to Delete this Alert?"))
	{
		$.ajax({
		   type: "POST",
		   url: "scripts/check.php",
		   data: "func=delete&id="+id,
		   success: function(msg){
		     window.alert( "alert deleted" );
		     window.location.reload();		     
		   }
		 });	
	}
}



//HIDE COLUMNS IN PAGINATION
 $(function() {
 
		//SKIP HOLIDAYS IN DATEPICKER
		$(".selector").datepicker({ beforeShowDay: nationalDays})   
			
			//missing: memorial day, labor day, 
			natDays = [
			  [1, 1, 'New Years Day'],
			  
			  [11, 22, 'Thanksgiving'],
			  [11, 23, 'Black Friday'],
			  [12, 24, 'Christmas Eve'], 
			  [12, 25, 'Christmas'], 
			  [5, 27, 'Memorial Day'], 
			  [9, 2, 'Labor Day'], 
			  [7, 4, 'Independance Day'], 
			  [7, 5, 'Floating Holiday'], 
			  [12,21, 'RdF Shutdown'],
			  [12,22, 'RdF Shutdown'],
			  [12,23, 'RdF Shutdown'],
			  [12,26, 'RdF Shutdown'],
			  [12,27, 'RdF Shutdown'],
			  [12,28, 'RdF Shutdown'],
			  [12,29, 'RdF Shutdown'],
			  [12,30, 'RdF Shutdown'],
			  [12,31, 'New Years Eve'],
			  [1,2, 'RdF Shutdown'],
			  [1,3, 'RdF Shutdown']
			];

			function nationalDays(date) {
				for (i = 0; i < natDays.length; i++) {
				  if (date.getMonth() == natDays[i][0] - 1
					  && date.getDate() == natDays[i][1]) {
					return [false, natDays[i][2] + '_day'];
				  }
				}
			  return [true, ''];
			}
			 
 
		//NO WEEKENDS IN DATEPICKER
		//$(".selector").datepicker({ beforeShowDay: $.datepicker.noWeekends })
		
		$(".sel").datepicker({ beforeShowDay: noWeekendsOrHolidays})   

			
			//FUNCTION FOR NO WEEKENDS AND/OR HOLIDAYS
			function noWeekendsOrHolidays(date) {
				var noWeekend = $.datepicker.noWeekends(date);
				if (noWeekend[0]) {
					return nationalDays(date);
				} else {
					return noWeekend;
				}
			}
				
			//LOOP IF NO WEEKDAY	
			var sd = new Date();
			for(var i = 0; i < 7; i++) {
				if($.datepicker.noWeekends(sd)[0]) break; //found a valid day, hop out
				sd.setDate(sd.getDate() + 1); //move to the next day
			}
			//$('.newsd').val($.datepicker({ 
				//dateFormat: 'yy-mm-dd',
				//beforeShowDay: $.datepicker.noWeekends,
				//defaultDate: sd.getDay()
				//dateFormat: 'yy-mm-dd'
			//}));
			//$(".newsd").val($.datepicker.formatDate('DD', new Date()));
			
		
		
		//RESIZABLE FUNCTIONS
		//$("#resizable").resizable({ animate:true });
 
		//DATE PICKERS
		$("#a_pe").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#created").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#qualdue").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#qualdueh").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ee").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#er").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ed").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ea").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		
		$("#created1").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#qualdue1").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ee1").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#er1").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ed1").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ea1").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		
		
		$("#lte").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		//$("#ltd").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ltr").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#lta").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#ltq").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#qduer").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#qduec").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#quoted").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#podate").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#cdate").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#rdate").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#pdate").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#fu1").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#fu2").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#fuf").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#rdate").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#req_ltd").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#CQ_DDate").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
		$("#RQ_DDate").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
 
 
		//PAGINATION -- EXCEL
		$(".custsort").click(function () {$(".custsort1").toggle("slow");});
		$(".cust1").click(function () {$(".custcode").toggle("slow");});
		$(".rep1").click(function () {$(".rep").toggle("slow");});
		$(".qid1").click(function () { $(".qid").toggle("slow");});
		$(".create1").click(function () {$(".create").toggle("slow");});
		$(".st1").click(function () {$(".st").toggle("slow");});
		$(".pid1").click(function () {$(".pid").toggle("slow");});
		$(".qdue1").click(function () {$(".qdue").toggle("slow");});
		$(".ee1").click(function () {$(".ee").toggle("slow");});
		$(".ed1").click(function () {$(".ed").toggle("slow");});
		$(".er1").click(function () {$(".er").toggle("slow");});
		$(".ea1").click(function () {$(".ea").toggle("slow");});
		$(".lte1").click(function () {$(".lte").toggle("slow");});
		$(".ltd1").click(function () {$(".ltd").toggle("slow");});
		$(".lta1").click(function () {$(".lta").toggle("slow");});
		$(".qduec1").click(function () {$(".qduec").toggle("slow");});
		$(".qduer1").click(function () {$(".qduer").toggle("slow");});
		$(".quot1").click(function () {$(".quot").toggle("slow");});
		$(".perce1").click(function () {$(".perce").toggle("slow");});
		$(".po1").click(function () {$(".po").toggle("slow");});
		$(".pod1").click(function () {$(".pod").toggle("slow");});
		$(".so1").click(function () {$(".so").toggle("slow");});
		$(".clc1").click(function () {$(".clc").toggle("slow");});
		$(".cdate1").click(function () {$(".cdate").toggle("slow");});
		$(".pdate1").click(function () {$(".pdate").toggle("slow");});
		$(".sc1").click(function () {$(".sc").toggle("slow");});
		$(".pn1").click(function () {$(".pn").toggle("slow");});
		$(".qty1").click(function () {$(".qty").toggle("slow");});
		$(".mu1").click(function () {$(".mu").toggle("slow");});
		$(".pcd1").click(function () {$(".pcd").toggle("slow");});
		$(".unith1").click(function () {$(".unith").toggle("slow");});
		$(".totalh1").click(function () {$(".totalh").toggle("slow");});
		$(".unitp1").click(function () {$(".unitp").toggle("slow");});
		$(".totalp1").click(function () {$(".totalp").toggle("slow");});
		$(".exp1").click(function () {$(".exp").toggle("slow");});
		$(".ltg1").click(function () {$(".ltg").toggle("slow");});
		$(".pop1").click(function () {$(".pop").toggle("slow");});
		$(".nums1").click(function () {$(".nums").toggle("slow");});
		$(".remarks1").click(function () {$(".remarks").toggle("slow");});
		$(".edit1").click(function () {$(".edit").toggle("slow");});
		$("#search1").click(function () {$("#search").toggle("slow");});
		$("#searchmore").click(function () {$(".expand").toggle("slow");});
		$("#navbut").click(function () {$("#navbut2").toggle("slow");});
		
		//REPORTS
		
		//MONTHLY REPORTS
		$("#but_m").click(function () {$("#s_month").toggle("slow");});
		
			$("#but_m1").click(function () {$("#s_m_excel").toggle("slow");});
			$("#but_m2").click(function () {$("#s_m_pdf").toggle("slow");});
			$("#but_m3").click(function () {$("#s_m_html").toggle("slow");});
			
			$("#but_m1").click(function () {
				$("#setup_o").hide();
				$("#setupd_m_e").show("slow");
			});
			
			$("#but_m2").click(function () {
				$("#setup_o").hide();
				$("#setupd_m_p").show("slow");
			});
			$("#but_m3").click(function () {
				$("#setup_o").hide();
				$("#setupd_m_h").show("slow");
			});
			
			//show either day / week / month => not all
			$("#but_m").click(function () {
				$("#s_month").show("slow");
				$("#s_day").hide();
				$("#s_week").hide();
			});
		
		//WEEKLY REPORTS
		$("#but_w").click(function () {$("#s_week").toggle("slow");});
		
			$("#but_w1").click(function () {$("#s_w_excel").toggle("slow");});
			$("#but_w2").click(function () {$("#s_w_pdf").toggle("slow");});
			$("#but_w3").click(function () {$("#s_w_html").toggle("slow");});
			
			$("#but_w1").click(function () {
				$("#setup_o").hide();
				$("#setupd_w_e").show("slow");
			});
			
			$("#but_w2").click(function () {
				$("#setup_o").hide();
				$("#setupd_w_p").show("slow");
			});
			$("#but_w3").click(function () {
				$("#setup_o").hide();
				$("#setupd_w_h").show("slow");
			});
			
			//show either day / week / month => not all
			$("#but_w").click(function () {
				$("#s_week").show("slow");
				$("#s_day").hide();
				$("#s_month").hide();
			});
			
		//DAILY REPORTS
		$("#but_d").click(function () {$("#s_day").toggle("slow");});
		
			$("#but_d1").click(function () {$("#s_d_excel").toggle("slow");});
			$("#but_d2").click(function () {$("#s_d_pdf").toggle("slow");});
			$("#but_d3").click(function () {$("#s_d_html").toggle("slow");});
		
			//change layout once reports are chosen properly
			//EXCEL
			$("#but_d1").click(function () {
				$("#setup_o").hide();
				$("#setupd_d_e").show("slow");
			});
			
			//PDF
			$("#but_d2").click(function () {
				$("#setup_o").hide();
				$("#setupd_d_p").show("slow");
			});
			
			//HTML5
			$("#but_d3").click(function () {
				$("#setup_o").hide();
				$("#setupd_d_h").show("slow");
			});
		
			//show either day or week [not both]
			$("#but_d").click(function () {
					$("#s_day").show("slow");
					$("#s_week").hide();
					$("#s_month").hide();
			});
		
		
		//QTIP2
		//qtip2 shorthand [yellow blocks of mouse overs]
		/* $('.dailyr').qtip({
			content: 'Daily Reports click here'
		});
		$('.weeklyr').qtip({
			content: 'Weekly Reports click here'
		});
		$('.monthlyr').qtip({
			content: 'Monthly Reports click here'
		});
			
		$('.rep_sel_3').qtip({
			content: 'reports printed in HTML5'
		});
		$('.rep_sel_2').qtip({
			content: 'reports done in PDF'
		});
		$('.rep_sel_1').qtip({
			content: 'reports done in Excel'
		}); */
		
		
		//PAGINATION / SEARCH HIDE COLUMNS
			//PID - EA
			//pidopen
			//pid2ea1 - 6 | pid2eaA1 - 6
				$("#pidopen").click(function () {
					$("#pid2ea1").toggle("slow");
					$("#pid2eaA1").toggle("slow");

					$("#pid2ea2").toggle("slow");
					$("#pid2eaA2").toggle("slow");
					$("#pid2ea3").toggle("slow");
					$("#pid2eaA3").toggle("slow");
					
					$("#pid2ea4").toggle("slow");
					$("#pid2eaA4").toggle("slow");
					
					$("#pid2ea5").toggle("slow");
					$("#pid2eaA5").toggle("slow");
					
					$("#pid2ea6").toggle("slow");
					$("#pid2eaA6").toggle("slow");
				
				});
		
		//poopen
		//po2pdate1 - 6 | po2pdateA1 - 6
				$("#poopen").click(function () {
					$("#po2pdate1").toggle("slow");
					$("#po2pdateA1").toggle("slow");

					$("#po2pdate2").toggle("slow");
					$("#po2pdateA2").toggle("slow");
					$("#po2pdate3").toggle("slow");
					$("#po2pdateA3").toggle("slow");
					
					$("#po2pdate4").toggle("slow");
					$("#po2pdateA4").toggle("slow");
					
					$("#po2pdate5").toggle("slow");
					$("#po2pdateA5").toggle("slow");
					
					$("#po2pdate6").toggle("slow");
					$("#po2pdateA6").toggle("slow");
				
				});
		
		
		//pcdopen
		//pcd2unit1 - 4 | pcd2unitA1 - 4
				$("#pcdopen").click(function () {
					$("#pcd2unit1").toggle("slow");
					$("#pcd2unitA1").toggle("slow");

					$("#pcd2unit2").toggle("slow");
					$("#pcd2unitA2").toggle("slow");
					$("#pcd2unit3").toggle("slow");
					$("#pcd2unitA3").toggle("slow");
					
					$("#pcd2unit4").toggle("slow");
					$("#pcd2unitA4").toggle("slow");
					
					
				});
		

		//expopen
		//exp2ship1 - 4 | exp2shipA1 - 4
				$("#expopen").click(function () {
					$("#exp2ship1").toggle("slow");
					$("#exp2shipA1").toggle("slow");

					$("#exp2ship2").toggle("slow");
					$("#exp2shipA2").toggle("slow");
					$("#exp2ship3").toggle("slow");
					$("#exp2shipA3").toggle("slow");
					
					$("#exp2ship4").toggle("slow");
					$("#exp2shipA4").toggle("slow");
					
					
				});

		
		
		//ADMIN PANEL
		$("#admin1").click(function () {$(".adminedit").toggle("slow");});
		$("#admin2").click(function () {$(".adminadd").toggle("slow");});
		$("#admin3").click(function () {$(".adminremove").toggle("slow");});
		$("#admin4").click(function () {$(".adminrdfcal").toggle("slow");});
		$("#adminN").click(function () {$(".adminnew").toggle("slow");});
		$("#sfa").click(function () {
			if($("#sfa").val() == 1){
			
				$("#sf_yes").show("slow");
			
			}
			if($("#sfa").val() == 0){
			$("#sf_yes").hide("slow");
			
			}
		});
		
		//HOME PAGE
		$(".createtrack").click(function () {$(".opptrack").toggle("slow");});
		
		
		//ADD & EDIT
		$("#custreq").click(function () {$("div.custreq2").toggle("slow");});
		$("#custreq3").click(function () {$("div.custreq3").toggle("slow");});
		$("#custreq4").click(function () {$("div.custreq4").toggle("slow");});
		$("#custreq5").click(function () {$("div.custreq5").toggle("slow");});
		$("#custreq6").click(function () {$("div.custreq6").toggle("slow");});
		$("#ltcheck").click(function () {$("#ltneed").toggle("slow");});
		$("#qduer").change(function () {$("#ecust").toggle("slow");});
		
		$("#qduec").change(function () {$("#cqid").toggle("slow");});
		$("#ponum").change(function () {$("#podate1").toggle("slow");});
		$("#quoted").change(function () {$("#boxr3").toggle("slow");});
		
		//IF #ST == "CL", SHOW CLCODE
		$("select").change(function() {
			var clsd = $('#St').val();
			if($(this).val() == "CL"){
			
				$("#close1").toggle("slow");
				$("#close2").toggle("slow");
				$("#close3").toggle("slow");
			
			}
		});
		
		$("#ltcheck").change(function() {
			if($(this).val() == 1){
				
				$("#lte").val($.datepicker.formatDate('yy-mm-dd', new Date()));
				
			
			}
		});
		
		$("#poselect").change(function() {
						
				$("#podate").val($.datepicker.formatDate('yy-mm-dd', new Date()));
						
		});
		
		//INSTOCK LTD = LTE + 1
		$(".newstock").change(function() {
				if($(this).val() == 1){
				
					$('#ltd, #lte').datepicker({dateFormat: 'yy-mm-dd'});
					var date_ltd = $("#lte").datepicker('getDate');
						
						//MON
						if($("#newsd").val() == 1){
							
							date_ltd.setDate(date_ltd.getDate()+1);
							
						}
						if($("#newsd").val() == 2){
							
							date_ltd.setDate(date_ltd.getDate()+1);
							
						}
						if($("#newsd").val() == 3){
							
							date_ltd.setDate(date_ltd.getDate()+1);
							
						}
						if($("#newsd").val() == 4){
							
							date_ltd.setDate(date_ltd.getDate()+1);
							
						}
						if($("#newsd").val() == 5){
							
							date_ltd.setDate(date_ltd.getDate()+3);
							
						}
						if($("#newsd").val() == 6){
							
							date_ltd.setDate(date_ltd.getDate()+2);
							
						}
						//SUN
						if($("#newsd").val() == 7){
							
							date_ltd.setDate(date_ltd.getDate()+1);
							
						}
						
					$("#ltd").datepicker('setDate', date_ltd);
				
				}	
				
		});
		
		
		//FU1, FU2, FUF => IF ST = Q
		$(".st_q").change(function() {
			if($(this).val() == 'Q'){
			
				if($("#MU").val() == 1){
				//FU1 = +4 weeks
				//FU2 = +4 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+28');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+28');
				}else 
				if($("#MU").val() == 2){
				//FU1 = +2 weeks
				//FU2 = +2 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
				}else 
				if($("#MU").val() == 3){
				//FU1 = +2 weeks
				//FU2 = +2 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
				}else 
				if($("#MU").val() == 4){
				//FU1 = +2 weeks
				//FU2 = +2 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
				}else 
				if($("#MU").val() == 5){
				//FU1 = +2 weeks
				//FU2 = +2 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
				}else 
				if($("#MU").val() == 'X'){
				//FU1 = +2 weeks
				//FU2 = +2 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
				}else 
				if($("#MU").val() == 'I'){
				//FU1 = +1 weeks
				//FU2 = +1 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else 
				if($("#MU").val() == 'P'){
				//FU1 = +2 weeks
				//FU2 = +2 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
				}else 
				if($("#MU").val() == 'F'){
				//FU1 = +2 weeks
				//FU2 = +2 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+14');
				}else 
				if($("#MU").val() == 'A'){
				//FU1 = +4 weeks
				//FU2 = +4 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+28');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+28');
				}else 
				if($("#MU").val() == 'E'){
				//FU1 = +4 weeks
				//FU2 = +4 weeks
					$(".fu1").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+28');
					$(".fu2").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+28');
				}
			
			}
		
		});
		
		//IF MU IS SELECTED, CHANGE LTD DATE
		//NEED TO OVER LOOK WEEKENDS AND HOLIDAYS
	
		$("#MU").change(function() {
			//var mu1 = $('#MU').val();
			if($(this).val() == 1){
					
				//$("#ltd").val($.datepicker.formatDate('yy-mm-dd').datepicker('setDate', new Date(), '+5'));	
				//$(".newsd").val($.datepicker.formatDate('DD', new Date()));
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+6');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}
				
			}
			
			if($(this).val() == 2){
				
		//		$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+3'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+4');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}
				
			}
			
			if($(this).val() == 3){
				
		//		$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+3'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+4');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}
			}
			
			if($(this).val() == 4){
				
		//		$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+3'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+4');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}
			}
			
			if($(this).val() == 5){
				
		//		$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+3'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+4');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}
			}
			
			if($(this).val() == 'X'){
				
		//		$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+3'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+4');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}
			}
			
			if($(this).val() == 'I'){
				//IPD
		//		$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+1'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+1');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+1');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+1');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+1');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+2');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+1');
				}
			}
			
			if($(this).val() == 'P'){
				
		//		$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+3'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+4');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}
			}
			
			if($(this).val() == 'F'){
				
			//	$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+3'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+4');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+3');
				}
			}
			
			if($(this).val() == 'A'){
				
			//	$("#ltd").val(datepicker({ dateFormat: 'yy-mm-dd',beforeShowDay: noWeekendsOrHolidays}).datepicker('setDate', '+5'));	
				if($("#newsd").val() == 1){
						//alert('MON');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 2){ 
				
						//alert('TUE');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 3){ 
				
						//alert('WEN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 4){ 
				
						//alert('THU');
						//$("#ltd").val($.datepicker.formatDate('yy-mm-dd', new Date()).datepicker('setDate', '+7'));
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');	
						
				}else if($("#newsd").val() == 5){ 
				
						//alert('FRI');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+7');
				}else if($("#newsd").val() == 6){ 
				
						//alert('SAT');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+6');
				}else if($("#newsd").val() == 7){ 
				
						//alert('SUN');
						$("#ltd").datepicker({ dateFormat: 'yy-mm-dd'}).datepicker('setDate', '+5');
				}
			}
		});
	
		
		
	
//LT REQUEST NEEDS: PN, QTY, MU, UNIT_PRICE
$(document).ready(function(){ 
	$("#partno,#qtyp,#mu,#unitp").change(function(){
	if($('#partno').val() != '' && $('#qtyp').val() != '' && $('#mu').val() != '' && $('#unitp').val() != ''){
	
		$("#ltbox").toggle("slow");
	}
	});
});


//NEED BEFORE CHECKBOXES SHOW
$(document).ready(function(){ 
	$("#qid,#created,#custcode,#REP,#st,#SC,#percent,#exp").change(function(){
	if($('#qid').val() != '' && $('#created').val() != '' && $('#custcode').val() != '' && $('#REP').val() != '' && $('#st').val() != '' && $('#SC').val() != '' && $('#percent').val() != '' && $('#exp').val() != ''){	
	
		$("#addneed").toggle("slow");
		
	}	
	});
});

//TOTAL HOURS = UNIT_HOURS * QTY = TOTAL_HOURS


//UNIT_PRICE * QTY = TOTAL_PRICE
$('#qtyp, #unitp').keyup(function() {
  var unitp = $('#unitp').val();      
  var qtyp = $('#qtyp').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp').val(goingp);
});	

//textbox2+ * textbox5+ = totalp+
$('#textbox22, #textbox52').keyup(function() {
  var text5 = $('#textbox52').val();      
  var text2 = $('#textbox22').val();   
  var goi2 = parseInt(text5,10) * parseInt(text2,10);
$('#totalp2').val(goi2);
});	

$('#textbox23, #textbox53').keyup(function() {
  var unitp = $('#textbox53').val();      
  var qtyp = $('#textbox23').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp3').val(goingp);
});			

$('#textbox24, #textbox54').keyup(function() {
  var unitp = $('#textbox54').val();      
  var qtyp = $('#textbox24').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp4').val(goingp);
});		
	
$('#textbox25, #textbox55').keyup(function() {
  var unitp = $('#textbox55').val();      
  var qtyp = $('#textbox25').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp5').val(goingp);
});			

$('#textbox26, #textbox56').keyup(function() {
  var unitp = $('#textbox56').val();      
  var qtyp = $('#textbox26').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp6').val(goingp);
});

$('#textbox27, #textbox57').keyup(function() {
  var unitp = $('#textbox57').val();      
  var qtyp = $('#textbox27').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp7').val(goingp);
});		

$('#textbox28, #textbox58').keyup(function() {
  var unitp = $('#textbox58').val();      
  var qtyp = $('#textbox28').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp8').val(goingp);
});		

$('#textbox29, #textbox59').keyup(function() {
  var unitp = $('#textbox59').val();      
  var qtyp = $('#textbox29').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp9').val(goingp);
});	

$('#textbox210, #textbox510').keyup(function() {
  var unitp = $('#textbox510').val();      
  var qtyp = $('#textbox210').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp10').val(goingp);
});	

$('#textbox211, #textbox511').keyup(function() {
  var unitp = $('#textbox511').val();      
  var qtyp = $('#textbox211').val();   
  var goingp = parseInt(unitp,10) * parseInt(qtyp,10);
$('#totalp11').val(goingp);
});				
			
//LTD + 1 = QDUER 
/****
$('#ltd').datepicker({onSelect: function(dateStr) {
      var date = $(this).datepicker('getDate');
      if (date) {
            $("#qduer").val(date.setDate(date.getDate() + 1));
            // Do something with date + 1
      }
}});
****/	
//IF STATUS = O, E, LT	

$(document).ready(function(){ //STATUS CHANGE TO "O"
  $("#qualdue").change(function(){
    $("#st").val("O");
  });
});

$(document).ready(function(){ //STATUS CHANGE TO "E"
  $("#ee,#ed,#er,#ea").change(function(){
    $("#st").val("E");
  });
});

$(document).ready(function(){ //STATUS CHANGE TO "LT"
  $("#lte,#ltd,#ltq,#ltr,#lta,#ltg").change(function(){
    $("#st").val("LT");
  });
});



});



$(function(sales_id) {

$("#edits").click(function () {$(".editview").toggle("slow");});
});
$(function() {

		$("#content2").focus(function()
		{
			$(this).animate({"height": "85px",}, "fast" );
			$("#button_block").slideDown("fast");
			return false;
		});

		$("#cancel2").click(function()
		{
			$("#content2").animate({"height": "30px",}, "fast" );
			$("#button_block").slideUp("fast");
			return false;
		});

});

//PAGINATION DROPDOWN DETAILS
function showDetails(rowID,divID,sales_id,type)
{
	if(type == 'NT')
	{
		page = 'pages/detail_pop2.php';
	}
	if(type == 'EDT')
	{
		page = 'pages/detail_pop.php';
	}
	
	
	$('#'+divID).html('');
	$('#'+divID).load(page+'?sales_id='+sales_id, function () { if($('#'+divID).css('display') == 'none') { toggleDiv(divID); } });
}


function shrinkDBFloat()
{
	if($('#debugger').hasClass('icon'))
	{
		$('#debugger').removeClass('icon');
		$('#debugger').addClass('expand');
	}
	else
	{
		$('#debugger').removeClass('expand');
		$('#debugger').addClass('icon');
	}
}

function toggleDiv(divID)
{
	$("#"+divID).toggle("slow");
}

function showPopOver(divID)
{
	$('#overlayBKG').style.display = 'block';
	$('#overlayContainer').style.display = 'block';
	$('#overlayContainer').style.top = "0px";	
}	

function hidePopOver(divID)
{
	$('#overlayBKG').style.display = 'none';
	$('#overlayContainer').style.display = 'none';
}

function vpWidth() {
	return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
function vpHeight() {
	return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function getScreenCenterY() {
	var y = 0;
	y = document.viewport.getScrollOffsets().top
	+(document.viewport.getHeight()/2);
	return(y);
}

function getScreenCenterX() {
	var x = 0;
	x=(document.body.clientWidth/2);
	return(x);
}

//Customer Code
$(function() {
		
	$( "#custcode" ).autocomplete({
		//source: availableTags
		source: "scripts/autocust.php"
	});
	
	$( "#custcodeh" ).autocomplete({
		//source: availableTags
		source: "scripts/autocust.php"
	});
});

//QID Number
$(function() {
		
	$( ".qid" ).autocomplete({
		//source: availableTags
		source: "scripts/autoQid.php"
	});
	
	$( ".qidh" ).autocomplete({
		//source: availableTags
		source: "scripts/autoQid.php"
	});
});

//THIS IS THE "SALES PORTAL" HEADER COOL FONT
$(function() {

  // Slider
  $('#coin-slider').coinslider({width:960,height:320,opacity:1});

  // Radius Box
  $('div.infopost, p.infopost, div.img, img.fl').css({"border-radius":"4px", "-moz-border-radius":"4px", "-webkit-border-radius":"4px"});
  //$('.menu_nav').css({"border-bottom-left-radius":"16px", "border-bottom-right-radius":"16px", "-moz-border-radius-bottomleft":"16px", "-moz-border-radius-bottomright":"16px", "-webkit-border-bottom-left-radius":"16px", "-webkit-border-bottom-right-radius":"16px"});

});	

Cufon.replace('h1, h2, h3, h4, h5, h6', { hover: true });
