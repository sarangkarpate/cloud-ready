$(document).ready(function(){
	$('#add-cloudProvider').on('submit',function(e){
		e.preventDefault();
		var name = 'BlueiTech';
		var deploymentModels = 'Private , Public ';
		var serviceModels = 'IaaS';
		var OS = 'Windows , Linux , Cent_OS';
		var period = 'Monthly'
		var costInDollar = 18.34;
		var RAMinGB = 1;
		var CPUcores = 1;
		var autoScaling = false;
		var blockStorage = false;
		var cloudStorage = true;
		var byOS = true;
		var dbAsService = true;
		var disasterRecovery = true;
		var DNSmgmt = false;
		var fileStorage = true;
		var fireWall = true;
		var flexibleStorage = true;
		var IPmgmt = true;
		var loadBalancing = false;
		var msgingServices = false;
		var snapShot = true;
		var sysMonitoring = true;
		var VPNaccess = false;
		var rating = 5.0;
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
		op +='<p>Deployment Models : '+data.deploymentModels+'</p>';
		op +='<p>Service Models : '+data.serviceModels+'</p>';
		op +='<p>OS : '+data.OS+'</p>';
		op += '<p> Best Plan : ';
		op +='Cost in $ : '+data.costInDollar+'<br>';
		op +='RAM in GB : '+data.RAMinGB+'<br>';
		op +='CPU cores'+data.CPUcores+'</p>';
		op += '<p>Features : Available/not <br>';
		op +='Auto-scaling : '+data.autoScaling+'<br>';
		op +='blockStorage : '+data.blockStorage+'<br>';
		op +='cloudStorage : '+data.cloudStorage+'<br>';
		op +='byOS : '+data.byOS+'<br>';		
		op +='dbAsService : '+data.dbAsService+'<br>';
		op +='disasterRecovery : '+data.disasterRecovery+'<br>';
		op +='DNSmgmt : '+data.DNSmgmt+'<br>';
		op +='fileStorage : '+data.fileStorage+'<br>';
		op +='fireWall : '+data.fireWall+'<br>';
		op +='flexibleStorage : '+data.flexibleStorage+'<br>';
		op +='IPmgmt : '+data.IPmgmt+'<br>';
		op +='loadBalancing : '+data.loadBalancing+'<br>';
		op +='msgingServices : '+data.msgingServices+'<br>';
		op +='snapShot : '+data.snapShot+'<br>';
		op +='sysMonitoring : '+data.sysMonitoring+'<br>';
		op +='VPNaccess : '+data.VPNaccess+'</p>';
		op +='<p>Rating : '+data.rating+'</p>';
//		op +='<p>'+data.+'</p>';
		op+='</div>';
	});
	op+='</div>';
	$('#Clouds').html(op);



});
}