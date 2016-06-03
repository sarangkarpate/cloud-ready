function getClouds(){
$.ajax({
	url: 'https://api.mlab.com/api/1/databases/cloud_cruisers/collections/RAW_DATA?apiKey=vPoKBtnYZowt4TRavfrZBJeudX667e7X'
}).done(function(data){
	var op='<div>';
	$.each(data,function(key,data){
		op +='<div class="well">';
//		op +='<h3>'+data.Product Name+'</h3>';
		op +='<h3>'+data.Duration+'</h3>';
//		op +='<h3>'+data.Glacier Storage+'</h3>';
		op +='<h3>'+data.Provider+'</h3>';
//		op +='<h3>'+data.Standard - Infrequent Access Storage+'</h3>';
//		op +='<h3>'+data.Standard Storage Cost+'</h3>';
	//	op +='<h3>'+data.Storage Capacity+'</h3>';
		op+='</div>';
	});
$('#Clouds').html(op);



});
}

/*
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