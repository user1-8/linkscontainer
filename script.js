$(document).ready(function(){

	// console.log(links_obj);

	let initialTemplate = $('.links_container').html();

	$('.links_container').html(' ');

	for (x in links_obj) {
		$('.links_container').append(initialTemplate.replace('Link Title 1', x).replace('https://www.example.com/', links_obj[x]));
	}


	$('.link-card').on('click',function(){
		let mythis= $(this)
		window.open($(mythis).children('p').text(), '_blank').focus();
	});




})