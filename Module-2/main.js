$(document).ready(function(){
	$('#add-cloudProvider').on('submit',function(e){
		e.preventDefault();
		var name = 'Amazon AWS';
		var deploymentModels = 'Private , Public , Hybrid';
		var serviceModels = 'IaaS , PaaS';
		var OS = 'Windows , Linux';
		var costInDollar = 0.07;
		var RAMinGB = 3.75;
		var CPUcores = 1;
		var autoScaling = true;
		var blockStorage = true;
		var cloudStorage = true;
		var byOS = false;
		var dbAsService = true;
		var disasterRecovery = true;
		var DNSmgmt = true;
		var fileStorage = true;
		var fireWall = false;
		var flexibleStorage = true;
		var IPmgmt = false;
		var loadBalancing = true;
		var msgingServices = true;
		var snapShot = false;
		var sysMonitoring = false;
		var VPNaccess = true;
		var rating = 3.9;
		var ajaxString = JSON.stringify({
				"name": name,
		"deploymentModels": deploymentModels,
		"serviceModels": serviceModels,
		"OS": OS,
		"costInDollar": costInDollar,
		"RAMinGB": RAMinGB,
		"CPUcores": CPUcores,
		"autoScaling": autoScaling,
		"blockStorage": blockStorage,
		"cloudStorage": cloudStorage,
		"byOS": byOS,
		"dbAsService": dbAsService,
		"disasterRecovery": disasterRecovery,
		"DNSmgmt": DNSmgmt,
		"fileStorage": fileStorage,
		"fireWall": fireWall,
		"flexibleStorage": flexibleStorage,
		"IPmgmt": IPmgmt,
		"loadBalancing": loadBalancing,
		"msgingServices": msgingServices,
		"snapShot": snapShot,
		"sysMonitoring": sysMonitoring,
		"VPNaccess": VPNaccess,
		"rating": rating
			});
		console.log(ajaxString);
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/clouddb/collections/cloudproviders?apiKey=pt_zsbc141xcEXJHM_9WdIAi5qi4yBfN',
			data: ajaxString,
			type: "POST",
			contentType:"application/json",
			success:function(data){
				window.location.href="index.html";
			},
			error: function(xhr, status, err){
				console.log(err);
			}
			
		});
		
	});
});








function getClouds(){
$.ajax({
	url: 'https://api.mlab.com/api/1/databases/clouddb/collections/cloudproviders?apiKey=pt_zsbc141xcEXJHM_9WdIAi5qi4yBfN'
}).done(function(data){
	var op='<div>';
	$.each(data,function(key,data){
		op +='<div class="well">';
		op +='<h3>'+data.name+'</h3>';
		op +='<h3>'+data.deploymentModels+'</h3>';
		op +='<h3>'+data.serviceModels+'</h3>';
		op +='<h3>'+data.OS+'</h3>';
		op +='<h3>'+data.costInDollar+'</h3>';
		op +='<h3>'+data.RAMinGB+'</h3>';
		op +='<h3>'+data.CPUcores+'</h3>';
		op +='<h3>'+data.autoScaling+'</h3>';
		op +='<h3>'+data.blockStorage+'</h3>';
		op +='<h3>'+data.cloudStorage+'</h3>';
		op +='<h3>'+data.byOS+'</h3>';		
		op +='<h3>'+data.dbAsService+'</h3>';
		op +='<h3>'+data.disasterRecovery+'</h3>';
		op +='<h3>'+data.DNSmgmt+'</h3>';
		op +='<h3>'+data.fileStorage+'</h3>';
		op +='<h3>'+data.fireWall+'</h3>';
		op +='<h3>'+data.flexibleStorage+'</h3>';
		op +='<h3>'+data.IPmgmt+'</h3>';
		op +='<h3>'+data.loadBalancing+'</h3>';
		op +='<h3>'+data.msgingServices+'</h3>';
		op +='<h3>'+data.snapShot+'</h3>';
		op +='<h3>'+data.sysMonitoring+'</h3>';
		op +='<h3>'+data.VPNaccess+'</h3>';
		op +='<h3>'+data.rating+'</h3>';
//		op +='<h3>'+data.+'</h3>';
		op+='</div>';
	});
$('#Clouds').html(op);



});
}

/*
		
		"rating": rating














Duration
:
"1 month"
Glacier Storage
:
"$0.007 per GB"
Product Name
:
"Amazon Simple Storage Service (S3)"
Provider
:
"Amazon"
Standard - Infrequent Access Storage
:
"$0.0125 per GB"
Standard Storage Cost
:
"$0.0300 per GB"
Storage Capacity
:
"0 TB - 1 TB"*/