$(document).ready(function() {
    alert("something should be happening1");
    $(".draggable").draggable();
    $(".droppable").droppable({
         drop: function(event, ui) {
             $(this)
             .addClass("highlighted")
             .find("p")
             .html("dropped");
             alert("something should be happening");
             $(".highlighted").on("mouseup", add_list);
         }
    });
    var check=false;
    $(".check").on("click", checked);
    alert($("#blocks_list li").length);
    // alert(".draggable".css(width));
 });

var combined_width= 0;


 function checked() {
    var width= $(".draggable").width();
    check=true;
    alert( combined_width);
    if(check==true) {
     $("#blocks_list").append("<li> block </li>");
     alert($("#blocks_list li").length);
     combined_width= ((width) * ($("#blocks_list li").length));
     alert(combined_width);
     $("#song").append("<li> song item </li>");
    // alert(blocks_list);
    // alert(song);
 }
 }



$(document).ready(function(){
    var Disney_clicked = "notclicked";
    var Allegro_clicked = "notclicked";

    $("#Disney").hide();
    $("#Allegro").hide();
    
    var Disney_selected = false;
    var Allegro_selected = false;

    $('#DisneyButton').click(function(){
        Disney_clicked = "clicked";
        if (Disney_clicked == "clicked" && Disney_selected == false && Allegro_selected == false){
            $("#DisneyButton").addClass("ButtonSelected");
            Disney_selected = true;
            Disney_clicked = "notclicked";
            $("#Disney").show();
            console.log("buttonselected");
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

