/**
 * Created by Juha on 19.1.2016.
 */
$( document ).ready(function(){

    $(".img-thumbnail").click(function() {
        var src = $(this).attr("src");
        $('#imagepreview').attr('src', src);
        $('#imagemodal').modal('show');
    });

    $('ul li a').click(function (e) {
        var href = $(e.target).attr('href');
        href = href.replace('#', '');
        var target = $('[data-link=\'' + href + '\']');
        $('body, html').animate({
            scrollTop: target.offset().top - 70
        }, 400);
    });

});
