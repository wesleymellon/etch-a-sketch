$(document).ready(function(){
    for(var i = 0; i < 20; i++){
        $('.main-body').append("<div class='"+i+" row'>");
        for(var j = 0; j < 20; j++){
            $('.' + i).append('<div class="inline"></div>');
        };
        $('.main-body').append('</div>');
    };

    $('.main-body').on('mouseover', '.inline', function(){
        $(this).addClass('highlighted');
    });




















});