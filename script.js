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
    var width= $(".draggable").width();
    alert(width);
    $(".check").on("click", checked);
    alert(check);
    // alert(".draggable".css(width));
 });


 function checked() {
    check=true;
    alert(check);
    if(check==true) {
     $("#blocks_list").append("<li>width</li>");
     $("#song").append("<li> song item </li>");
    alert("added to list");
    alert(blocks_list);
    alert(song);
 }
 }



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
 