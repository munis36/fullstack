/**
 * Created by mnagarat on 2/26/18.
 */
/* $(function(){
 $('[data-toggle=tooltip]').tooltip();
 $('');
 });*/
$(document).ready(function(){
    $("#mycarousel").carousel({interval:2000});

    $("#carousel-pause").on("click",function(evnt){
        $("#mycarousel").carousel('pause');
    });

    $("#carousel-play").on("click",function(evnt){
        $("#mycarousel").carousel('cycle');
    });

    $("#carousel-button").on('click', function(evnt){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }else{
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');

        }
    });

});