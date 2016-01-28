$(function(){
	$('.car-container, .priseks').click(function(event){
		event.preventDefault();
		var objModel=$('#modal-car-1').find('.modal-content');
		
		// Create the template from json
		var car = cars.cars[$(this).data('jid')-1];
		
		//console.log(parseTemplate(car));
		
		objModel.html(parseTemplate(car));
        
        $('#ctaForm').submit(function(event){
			event.preventDefault();
			$.post( "thank-you", $( "#contactForm" ).serialize(), function(data){
				$('#ctaForm').addClass("hideform");
				$('#ctaFormTak').addClass("showtak");
			} );
		});
		
		objModel.find('.item[style="background-image: url();"]').remove();
		
		$("#cl-slider-modal").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			navigationText: ["<span><i class='ion-chevron-left'></span>", "<span><i class='ion-chevron-right'></span>"]
		});
		$('#modal-car-1').modal('toggle');
		history.pushState(null, null, $(this).data('url'));
		//console.log(parseTemplate($(this).data('jid')));
		
		/*
		$.get($(this).data('url'), function(data){
			objModel.html(data);
			$("#cl-slider-modal").owlCarousel({
				navigation : true, // Show next and prev buttons
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem:true,
				navigationText: ["<span><i class='ion-chevron-left'></span>", "<span><i class='ion-chevron-right'></span>"]
			});
			$('#modal-car-1').modal('toggle');
		});
		*/
		
		/*
		$('#modal-'+$(this).data("id")).modal('toggle');
		
		$("#cl-slider-modal").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			navigationText: ["<span><i class='ion-chevron-left'></span>", "<span><i class='ion-chevron-right'></span>"]
		});
		*/
	});
	
	$('#modal-car-1').on('hidden.bs.modal', function () {
		history.pushState(null, null, '/');
	})
	
	// grab path
	var hostname = document.location.origin;
	var path = window.location.hash.substr(1);
	if (path.length){
		//console.log(hostname+path);
		//console.log(path.length)
		var combinedPath=hostname+path;
		obj = $('.car-container[data-url="'+path+'"]');
		if (obj){
			var objModel=$('#modal-car-1').find('.modal-content');
			// Create the template from json
			var car = cars.cars[$(obj).data('jid')-1];
			
			//console.log(parseTemplate(car));
			
			objModel.html(parseTemplate(car));
            $('#ctaForm').submit(function(event){
                event.preventDefault();
                $.post( "thank-you", $( "#contactForm" ).serialize(), function(data){
                    $('#ctaForm').addClass("hideform");
                    $('#ctaFormTak').addClass("showtak");
                } );
            });
            
			
			objModel.find('.item[style="background-image: url();"]').remove();
			
			$("#cl-slider-modal").owlCarousel({
				navigation : true, // Show next and prev buttons
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem:true,
				navigationText: ["<span><i class='ion-chevron-left'></span>", "<span><i class='ion-chevron-right'></span>"]
			});
			$('#modal-car-1').modal('toggle');
			history.pushState(null, null, $(obj).data('url'));
			
		}
		
	}
	
})