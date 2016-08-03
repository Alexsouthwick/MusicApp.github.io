
 var highlight=false;
 var combined_width= 0;
 var song= "";
$(document).ready(function() {
    alert("something should happen1")
    $(".draggable").draggable();
    $(".droppable").droppable({
         drop: function(event, ui) {
             $(this).append(ui.draggable.css({position: 'relative'}));
             .addClass("highlighted")
             highlight= true;
             alert(highlight);
             alert("something should be happening");
             if (highlight == true) {
                var width= $(".draggable").width();
                $("#blocks_list").append("<li> block </li>");
                alert($("#blocks_list li").length);
                combined_width= ((width) * ($("#blocks_list li").length));
                alert(combined_width);
                var draggableid= ui.draggable.find("h4").attr("id");
                alert(draggableid);
                string_draggableid= String(draggableid);
                alert(string_draggableid);
                // melody= document.getElementById("draggableid").innerHTML;
                melody= ui.draggable.find("h4").attr("id").getElementsByTagName('h4')[0].innerHTML;
                alert(melody);
                string_melody= String(melody);
                alert(string_melody);
                // melody2= block2.getElementsByTagName('h4')[0].innerHTML;
                // // alert(melody2);
                //  string_melody2= String(melody2);
                // alert(string_melody2);

                if (string_melody.localeCompare("C G E B")){
                 song += "cgeb";
                 highlight= false; 
                 alert(song);  
                 }

                 else if (string_melody.localeCompare("F G B A")){
                 song += "fgba"; 
                 alert(song);  
                 }
                 else
                    {alert("else happened");}
                
    }
         }
        
    });
    alert($("#blocks_list li").length);
     $("#blocks_list").hide();
     $("#song").hide();
     $("div.Scroller").scrollLeft(300);
 });


$(document).ready(function(){
    var Disney_clicked = "notclicked";
    var Allegro_clicked = "notclicked";

    $("#Disney").hide();
    $("#Allegro").hide();
    
    var Disney_selected = false;
    var Allegro_selected = false;

    $('.DisneyButton').click(function(){
        Disney_clicked = "clicked";
        if (Disney_clicked == "clicked" && Disney_selected == false && Allegro_selected == false){
            $(".DisneyButton").addClass("ButtonSelected");
            Disney_selected = true;
            Disney_clicked = "notclicked";
            $("#Disney").show();
        }

        if (Disney_clicked == "clicked" && Disney_selected == true){
            Disney_selected = false;
            $("#Disney").hide();
            $(".DisneyButton").removeClass("ButtonSelected");
        }
    });

    $('.AllegroButton').click(function(){
        var Allegro_clicked = "clicked";
        if (Allegro_clicked == "clicked" && Allegro_selected == false && Disney_selected == false){
            $(".AllegroButton").addClass("ButtonSelected");
            Allegro_selected = true;
            Allegro_clicked = "notclicked";
            $("#Allegro").show();
        }
        if (Allegro_clicked == "clicked" && Allegro_selected == true){
            Allegro_selected = false;
            $("#Allegro").hide();
            $(".AllegroButton").removeClass("ButtonSelected");
        }
    });
});

