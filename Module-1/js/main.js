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

function getCloudNames(){
$.ajax({
	url: 'https://api.mlab.com/api/1/databases/clouddb/collections/cloudproviders?apiKey=pt_zsbc141xcEXJHM_9WdIAi5qi4yBfN'
}).done(function(data){
	var op='<div>';
	$.each(data,function(key,data){
		op +='<div class="well">';
		op +='<h3>'+data.name+'</h3>';
		op+='</div>';
	});
	op+='</div>';
	$('#Clouds').html(op);
});
}