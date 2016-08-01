$(document).ready(function() {
    $(".draggable").draggable();
    $(".droppable").droppable({
        drop: function(event, ui) {
            $(this)
            .addClass("highlighted")
            .find("p")
            .html("dropped");
        }
    });
});

var w = $('#block_list ul').width();

$("#block_list >ul").animate({
    left: -w
}, 30000)