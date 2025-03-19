/*******vj_Parmar*******/
/*******WEBOMAZE*******/

requirejs(['jquery','owl.carousel/owl.carousel.min'], function(jQuery) {
	jQuery(document).ready(function() {

		/***vJprmr***/
		jQuery('#wm_prmrFeatured_product .owl-carousel').owlCarousel({
			items : 4,
			nav:true,
			dots: false,
			arrow: true,
			margin: 80,
			center: true,
			loop: true,
			autoplay:true,
		    autoplayTimeout:5000,
		    autoplayHoverPause:true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        764:{
		            items:3
		        },
		        850:{
		            items:4
		        }
		    }
		});

		/*jQuery("#wmPrmr_addToQuoteForm").hide();*/

		jQuery("#wmprmr_product_addtoquote-button").click(function(){		
			jQuery(".wmPrmr_addToQuoteForm").css("display", "block");
			jQuery(".wmPrmr_addToQuoteForm").show();
		});

		jQuery(".wmPrmr_addToQuoteFormClose").click(function(){		
			jQuery(".wmPrmr_addToQuoteForm").css("display", "none");
			jQuery(".wmPrmr_addToQuoteForm").hide();
		});

		var x = 0;
		var intervalID = setInterval(function () {
	       	jQuery('.product.info.detailed').insertAfter('.product-info-main');
	       if (++x === 24) {
	           window.clearInterval(intervalID);
	        }
	    }, 2000);

	    /*var x = 0;
		var intervalID = setInterval(function () {
	       	jQuery("#tab-label-custom-1").insertBefore("#tab-label-description");
	       if (++x === 10) {
	           window.clearInterval(intervalID);
	        }
	    }, 1000); */

            jQuery(function() {
	      jQuery(this).bind("contextmenu1", function(e) {
		e.preventDefault();
	      });
            });


	});
});
/*******WEBOMAZE END*******/
/*******vj_Parmar End*******/
