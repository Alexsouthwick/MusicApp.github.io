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




