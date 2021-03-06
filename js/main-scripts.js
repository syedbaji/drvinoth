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
    $('.docvideos-section-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    $('.home-services-carousel').owlCarousel({
        loop: false,
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
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    if($(window).width() < 767){
        $('.home-testimonial-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });        
    }
    // $('.readmore').on('click', function(){
    //     var title = $(this).closest('.services-item').find('h3').text();
    //     var content = $(this).closest('.services-item').find('.services-desc-block').find('p').text();
    //     $('.more-details h3').text(title);
    //     $('.more-details .services-desc-block p').text(content);
    //     $('.more-details').animate({'top': '0px', 'opacity': '1'});
    // });
    $('span.down-icon-holder').on('click', function(event){
        event.preventDefault();
        $(this).closest('.dropdown').toggleClass('active');
    });
    $('.bar-block a').on('click', function(event){
        event.preventDefault();
        $(this).closest('.bar-block').toggleClass('active de-active');
        $('.action-buttons-block').toggleClass('d-block d-none');
    });
    $('a.gal-item, a.pop-item').on('click', function(){
        var thiis = $(this);
        var showurl = '';
        if(thiis.hasClass('image')){
            showurl = thiis.data('imageurl');
            $(document).find('#myVideoModal').find('.modal-body').html('<img src="'+showurl+'" class="img-fluid w-100" />');
        }else{
            showurl = thiis.data('videourl');
            $(document).find('#myVideoModal').find('.modal-body').html('<iframe width="100%" height="315" src="'+showurl+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
    });
    $("#myVideoModal").on("hidden.bs.modal", function () {
        $(this).find('iframe').attr('src', '');
    });
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
    // $('.clickmefor-mobile-menu').
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 1){
            $('header').addClass('fixed-top');
        }else{
            $('header').removeClass('fixed-top');
        }
    });
});