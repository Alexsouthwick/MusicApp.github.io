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


$(document).ready(function(){
    var Disney_clicked = "notclicked";
    var Allegro_clicked = "notclicked";

    $("#Disney").hide();
    $("#Allegro").hide();
    var Allegro_selected = false;
    var Disney_selected = false;

    $('#DisneyButton').click(function(){
        var Disney_clicked = "clicked";
        if (Disney_clicked == "clicked" && Disney_selected == false && Allegro_selected == false){
            Disney_selected = true;
            Disney_clicked = "notclicked";
            $("#Disney").show();
        }
        if (Disney_clicked == "clicked" && Disney_selected == true){
            Disney_selected = false;
            $("#Disney").hide();
        }
    });

    $('#AllegroButton').click(function(){
        var Allegro_clicked = "clicked";
        if (Allegro_clicked == "clicked" && Allegro_selected == false && Disney_selected == false){
            Allegro_selected = true;
            Allegro_clicked = "notclicked";
            $("#Allegro").show();
        }
        if (Allegro_clicked == "clicked" && Allegro_selected == true){
            Allegro_selected = false;
            $("#Allegro").hide();
        }
    });
});
 
