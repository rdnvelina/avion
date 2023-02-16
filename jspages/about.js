$(function() {

    var headerH = $("#header"),
        heroH = $("#hero").innerHeight(),
        scrollOffset = 0;

       $("[data-scroll]").on("click", function(event){
            event.preventDefault();

        var blockId = $(this).data('scroll');
            blockOffset = $(blockId).offset().top;

            $("html, body").animate ({
                scrollTop: blockOffset
            }, 800);


       });
    
});