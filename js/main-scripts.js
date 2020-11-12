$(document).ready(function () {
    $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.readmore').on('click', function(){
        var title = $(this).closest('.services-item').find('h3').text();
        var content = $(this).closest('.services-item').find('.services-desc-block').find('p').text();
        $('.more-details h3').text(title);
        $('.more-details .services-desc-block p').text(content);
        $('.more-details').animate({'top': '0px', 'opacity': '1'});
    })
    $('.close-btn').on('click', function(){
        $('.more-details').animate({'top': '100%', 'opacity': '0'});
    })
    $('.service-tab').on('click', function(){
        showActiveTabContent($(this));
    });
    $('.achievements-tab').on('click', function(){
        showActiveTabContent($(this));
    });
    function showActiveTabContent(thiss){
        var tabname = thiss.data('tab');
        $('*[data-content], *[data-tab]').removeClass('active');
        $('*[data-content="'+ tabname +'"], *[data-tab="'+ tabname +'"]').addClass('active');
    }
    $('.filterbtn').on('click', function(){
        var category = $(this).data('filter');
        if(category === '.all'){
            $('.port-item').removeClass('active').fadeOut();
            setTimeout(function(){
                $('.port-item').addClass('active').fadeIn();
            }, 1000);
        }else{
            $('.port-item').removeClass('active').fadeOut();
            setTimeout(function(){
                $('.port-item'+category).addClass('active').fadeIn();
            }, 1000);
        }
        $('.filterbtn').removeClass('active');
        $(this).addClass('active');
    });
    $('.achievements-tab').on('click', function(){
        showActiveTabContent($(this));
    });
    // $('.example-image-link').on('click', function(event){
    //     var thiss = $(this);
    //     event.preventDefault();
    //     if($(this).hasClass('video')){
    //         setTimeout(function(){
    //             $('.lb-container iframe').remove();
    //             $('.lb-container').prepend('<iframe width="100%" height="315" src="'+ thiss.data('videourl') +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    //             $('.lb-container .lb-image').hide();
    //         },1000);
    //     }else{
    //         $('.lb-container iframe').remove();
    //     }
    // });
    // $('.lb-next').on('click', function(){
    //     $('.lb-container iframe').remove();
    // });
    
});