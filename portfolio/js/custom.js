
	
	$('.category-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.category-tabs li').removeClass('active');
		$('.product-category-list').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})


$('.banner-slider').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        items: 1,
        dots: true,
        nav: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            }
        }
    })

$('.best-seller-flex').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        items: 4,
        dots: false,
        nav: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                nav: false                
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 4,
                            }
        }
    })

$('.news-slider').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        items: 4,
        dots: false,
        nav: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    })

//menu
   //menu left toggle

  $(".sidebar").click(function(){
    $(".sidebar").toggleClass("active");
    $(".menu").toggleClass("active");
  });


$(document).on("click", ".cart-icon , .cancel-btn", function() {
      $(".cart-sidebar").toggleClass("active");
  });
  
