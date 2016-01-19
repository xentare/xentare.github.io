/**
 * Created by Juha on 19.1.2016.
 */
$( document ).ready(function(){

    $(".img-thumbnail").click(function() {
        var src = $(this).attr("src");
        $('#imagepreview').attr('src', src);
        $('#imagemodal').modal('show');
    });

});
