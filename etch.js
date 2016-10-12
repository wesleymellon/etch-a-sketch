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

    $('#clear').on('click', function(){
        var input = prompt('How many squares do you want?');
        var length = (800 / input) - 2;
        $('.row').remove();

        for(var i = 0; i < input; i++){
            $('.main-body').append("<div class='"+i+" row'>");
            for(var j = 0; j < input; j++){
                $('.' + i).append('<div class="inline"></div>');
            };
            $('.main-body').append('</div>');
        }

        $('.inline').css('width', length + 'px');
        $('.inline').css('height', length + 'px');
    });




});