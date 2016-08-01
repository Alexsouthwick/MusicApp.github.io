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